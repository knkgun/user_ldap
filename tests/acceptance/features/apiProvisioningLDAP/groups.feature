@api @issue-268
Feature: manage groups
  As an administrator
  I want to be able to add, delete and modify groups via the Provisioning API
  So that I can easily manage groups when user LDAP is enabled

  Background:
    Given user "brand-new-user" has been created with default attributes in the database user backend
    # In drone the ldap groups have not synced yet. So this occ command is required to sync them.
    And the administrator has invoked occ command "group:list"

  Scenario Outline: admin creates a database group when ldap is enabled
    Given using OCS API version "<ocs-api-version>"
    When the administrator sends a group creation request for group "simplegroup" using the provisioning API
    Then the OCS status code should be "<ocs-status-code>"
    And the HTTP status code should be "<http-status-code>"
    And group "simplegroup" should exist
    Examples:
      | ocs-api-version | ocs-status-code | http-status-code |
      | 1               | 100             | 200              |
      | 2               | 200             | 200              |

  Scenario Outline: adding a non ldap user to a database group when ldap is enabled
    Given using OCS API version "<ocs-api-version>"
    And group "simplegroup" has been created in the database user backend
    When the administrator adds user "brand-new-user" to group "simplegroup" using the provisioning API
    Then the OCS status code should be "<ocs-status-code>"
    And the HTTP status code should be "<http-status-code>"
    And user "brand-new-user" should belong to group "simplegroup"
    Examples:
      | ocs-api-version | ocs-status-code | http-status-code |
      | 1               | 100             | 200              |
      | 2               | 200             | 200              |

  Scenario Outline: admin deletes a database group when ldap is enabled
    Given using OCS API version "<ocs-api-version>"
    And group "simplegroup" has been created in the database user backend
    When the administrator deletes group "simplegroup" using the provisioning API
    Then the OCS status code should be "<ocs-status-code>"
    And the HTTP status code should be "<http-status-code>"
    And group "simplegroup" should not exist
    Examples:
      | ocs-api-version | ocs-status-code | http-status-code |
      | 1               | 100             | 200              |
      | 2               | 200             | 200              |

  Scenario Outline: admin gets users in the database group when ldap is enabled
    Given using OCS API version "<ocs-api-version>"
    And user "123" has been created with default attributes in the database user backend
    And group "new-group" has been created in the database user backend
    And user "brand-new-user" has been added to database backend group "new-group"
    And user "123" has been added to database backend group "new-group"
    When the administrator gets all the members of group "new-group" using the provisioning API
    Then the OCS status code should be "<ocs-status-code>"
    And the HTTP status code should be "<http-status-code>"
    And the users returned by the API should be
      | brand-new-user |
      | 123            |
    Examples:
      | ocs-api-version | ocs-status-code | http-status-code |
      | 1               | 100             | 200              |
      | 2               | 200             | 200              |

  Scenario Outline: Administrator tries to delete a ldap group
    Given using OCS API version "<ocs-api-version>"
    When the LDAP users are resynced
    And the administrator deletes group "grp1" using the provisioning API
    Then the OCS status code should be "<ocs-status-code>"
    And the HTTP status code should be "<http-status-code>"
    And group "grp1" should exist
    Examples:
      | ocs-api-version | ocs-status-code | http-status-code |
      | 1               | 102             | 200              |
      | 2               | 400             | 400              |

  @issue-core-25224
  Scenario Outline: Add database user to ldap group
    Given using OCS API version "<ocs-api-version>"
    And user "db-user" has been created with default attributes in the database user backend
    When the administrator adds user "db-user" to group "grp1" using the provisioning API
    Then the OCS status code should be "<ocs-status-code>"
    And the HTTP status code should be "<http-status-code>"
    And user "brand-new-user" should not belong to group "grp1"
    Examples:
      | ocs-api-version | ocs-status-code | http-status-code |
      | 1               | 100             | 200              |
      | 2               | 200             | 200              |
    # | 1               | 102             | 200              |
    # | 2               | 400             | 400              |

  Scenario Outline: Add ldap user to database group
    Given using OCS API version "<ocs-api-version>"
    And group "db-group" has been created in the database user backend
    When the administrator adds user "user1" to group "db-group" using the provisioning API
    Then the OCS status code should be "<ocs-status-code>"
    And the HTTP status code should be "<http-status-code>"
    And user "user1" should belong to group "db-group"
    Examples:
      | ocs-api-version | ocs-status-code | http-status-code |
      | 1               | 100             | 200              |
      | 2               | 200             | 200              |

  @issue-core-25224
  Scenario Outline: Add ldap user to ldap group
    Given using OCS API version "<ocs-api-version>"
    When the administrator adds user "user1" to group "grp2" using the provisioning API
    Then the OCS status code should be "<ocs-status-code>"
    And the HTTP status code should be "<http-status-code>"
    And user "user1" should not belong to group "grp2"
    Examples:
      | ocs-api-version | ocs-status-code | http-status-code |
      | 1               | 100             | 200              |
      | 2               | 200             | 200              |
    # | 1               | 102             | 200              |
    # | 2               | 400             | 400              |

  Scenario: Add ldap group with same name as existing database group
    Given group "db-group" has been created in the database user backend
    When the administrator imports this ldif data:
      """
      dn: cn=db-group,ou=TestGroups,dc=owncloud,dc=com
      cn: db-group
      gidnumber: 4700
      objectclass: top
      objectclass: posixGroup
      """
    # In drone the ldap groups have not synced yet. So this occ command is required to sync them.
    And the administrator has invoked occ command "group:list"
    Then group "db-group_2" should exist

  Scenario Outline: Add database group with same name as existing ldap group
    Given using OCS API version "<ocs-api-version>"
    When the administrator sends a group creation request for group "grp1" using the provisioning API
    Then the OCS status code should be "<ocs-status-code>"
    And the HTTP status code should be "<http-status-code>"
    And group "grp1" should exist
    Examples:
      | ocs-api-version | ocs-status-code | http-status-code |
      | 1               | 102             | 200              |
      | 2               | 400             | 400              |