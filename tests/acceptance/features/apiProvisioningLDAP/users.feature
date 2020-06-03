@api @provisioning_api-app-required
Feature: Manage users using the Provisioning API
  As an administrator
  I want to be able to add, delete and modify users via the Provisioning API
  So that I can easily manage users when user LDAP is enabled

  Scenario Outline: Admin creates a regular user
    Given using OCS API version "<ocs-api-version>"
    And user "Alice" has been deleted
    When the administrator sends a user creation request with the following attributes using the provisioning API:
      | username    | Alice          |
      | password    | %alt1%         |
      | displayname | Brand New User |
    Then the OCS status code should be "<ocs-status-code>"
    And the HTTP status code should be "<http-status-code>"
    And user "Alice" should exist
    And user "Alice" should be able to access a skeleton file
    Examples:
      | ocs-api-version | ocs-status-code | http-status-code |
      | 1               | 100             | 200              |
      | 2               | 200             | 200              |

  Scenario Outline: Admin deletes a regular user
    Given using OCS API version "<ocs-api-version>"
    And user "Alice" has been created with default attributes in the database user backend
    When the administrator deletes user "Alice" using the provisioning API
    Then the OCS status code should be "<ocs-status-code>"
    And the HTTP status code should be "<http-status-code>"
    And user "Alice" should not exist
    Examples:
      | ocs-api-version | ocs-status-code | http-status-code |
      | 1               | 100             | 200              |
      | 2               | 200             | 200              |

  Scenario Outline: Administrator can edit a user email
    Given using OCS API version "<ocs-api-version>"
    And user "Alice" has been created with default attributes in the database user backend
    When the administrator changes the email of user "Alice" to "someone@example.com" using the provisioning API
    Then the OCS status code should be "<ocs-status-code>"
    And the HTTP status code should be "<http-status-code>"
    And the email address of user "Alice" should be "someone@example.com"
    Examples:
      | ocs-api-version | ocs-status-code | http-status-code |
      | 1               | 100             | 200              |
      | 2               | 200             | 200              |

  Scenario Outline: the administrator can edit a user display (the API allows editing the "display name" by using the key word "display")
    Given using OCS API version "<ocs-api-version>"
    And user "Alice" has been created with default attributes in the database user backend
    When the administrator changes the display of user "Alice" to "A New User" using the provisioning API
    Then the OCS status code should be "<ocs-status-code>"
    And the HTTP status code should be "<http-status-code>"
    And the display name of user "Alice" should be "A New User"
    Examples:
      | ocs-api-version | ocs-status-code | http-status-code |
      | 1               | 100             | 200              |
      | 2               | 200             | 200              |

  Scenario Outline: the administrator can edit a user display name
    Given using OCS API version "<ocs-api-version>"
    And user "Alice" has been created with default attributes in the database user backend
    When the administrator changes the display name of user "Alice" to "A New User" using the provisioning API
    Then the OCS status code should be "<ocs-status-code>"
    And the HTTP status code should be "<http-status-code>"
    And the display name of user "Alice" should be "A New User"
    Examples:
      | ocs-api-version | ocs-status-code | http-status-code |
      | 1               | 100             | 200              |
      | 2               | 200             | 200              |

  Scenario Outline: the administrator can edit a user quota
    Given using OCS API version "<ocs-api-version>"
    And user "Alice" has been created with default attributes in the database user backend
    When the administrator changes the quota of user "Alice" to "12MB" using the provisioning API
    Then the OCS status code should be "<ocs-status-code>"
    And the HTTP status code should be "<http-status-code>"
    And the quota definition of user "Alice" should be "12 MB"
    Examples:
      | ocs-api-version | ocs-status-code | http-status-code |
      | 1               | 100             | 200              |
      | 2               | 200             | 200              |

  @issue-core-33186
  Scenario Outline: admin tries to modify displayname of user for which an LDAP attribute is specified
    Given using OCS API version "<ocs-api-version>"
    And user "Alice" has been created with default attributes and without skeleton files
    When the administrator sets the ldap attribute "displayname" of the entry "uid=Alice,ou=TestUsers" to "ldap user"
    And the LDAP users are resynced
    When the administrator changes the display of user "Alice" to "A New User" using the provisioning API
    Then the OCS status code should be "<ocs-status-code>"
    And the HTTP status code should be "<http-status-code>"
    And the display name of user "Alice" should be "ldap user"
    Examples:
      | ocs-api-version | ocs-status-code | http-status-code |
      | 1               | 100             | 200              |
      | 2               | 200             | 200              |
    # | 1               | 102             | 200              |
    # | 2               | 400             | 400              |

  @issue-core-33186
  Scenario Outline: admin tries to modify password of user for which an LDAP attribute is specified
    Given using OCS API version "<ocs-api-version>"
    And user "Alice" has been created with default attributes and skeleton files
    When the administrator sets the ldap attribute "userpassword" of the entry "uid=Alice,ou=TestUsers" to "ldap_password"
    And the LDAP users are resynced
    And the administrator resets the password of user "Alice" to "api_password" using the provisioning API
    Then the OCS status code should be "<ocs-status-code>"
    And the HTTP status code should be "<http-status-code>"
    And the content of file "textfile0.txt" for user "Alice" using password "ldap_password" should be "ownCloud test text file 0" plus end-of-line
    But user "Alice" using password "api_password" should not be able to download file "textfile0.txt"
    Examples:
      | ocs-api-version | ocs-status-code | http-status-code |
      | 1               | 100             | 200              |
      | 2               | 200             | 200              |
    # | 1               | 102             | 200              |
    # | 2               | 400             | 400              |

  @issue-core-33186
  Scenario Outline: admin tries to modify mail of user for which an LDAP attribute is specified
    Given using OCS API version "<ocs-api-version>"
    And user "Alice" has been created with default attributes and without skeleton files
    When the administrator sets the ldap attribute "mail" of the entry "uid=Alice,ou=TestUsers" to "ldapuser@oc.com"
    And the LDAP users are resynced
    And the administrator changes the email of user "Alice" to "apiuser@example.com" using the provisioning API
    Then the OCS status code should be "<ocs-status-code>"
    And the HTTP status code should be "<http-status-code>"
    # And the email address of user "Alice" should be "ldapuser@oc.com"
    And the email address of user "Alice" should be "apiuser@example.com"
    And the LDAP users are resynced
    And the email address of user "Alice" should be "ldapuser@oc.com"
    Examples:
      | ocs-api-version | ocs-status-code | http-status-code |
      | 1               | 100             | 200              |
      | 2               | 200             | 200              |
    # | 1               | 102             | 200              |
    # | 2               | 400             | 400              |

  @issue-core-33186
  Scenario: admin tries to modify quota of user for which an LDAP attribute is specified
    Given using OCS API version "1"
    And user "Alice" has been created with default attributes and without skeleton files
    #to set Quota we can just misuse any LDAP text field
    And LDAP config "LDAPTestId" has key "ldapQuotaAttribute" set to "employeeNumber"
    When the administrator sets the ldap attribute "employeeNumber" of the entry "uid=Alice,ou=TestUsers" to "10 MB"
    And the LDAP users are resynced
    And the administrator changes the quota of user "Alice" to "13MB" using the provisioning API
    Then the OCS status code should be "100"
    And the HTTP status code should be "200"
    And the quota definition of user "Alice" should be "13 MB"
    #And the quota definition of user "Alice" should be "10 MB"
    When the LDAP users are resynced
    Then the quota definition of user "Alice" should be "10 MB"
#    Examples:
#      | ocs-api-version | ocs-status-code | http-status-code |
#      | 1               | 100             | 200              |
#      | 2               | 200             | 200              |
    # | 1               | 102             | 200              |
    # | 2               | 400             | 400              |

  Scenario Outline: admin sets quota of user for which no LDAP quota attribute is specified
    Given using OCS API version "<ocs-api-version>"
    And user "Alice" has been created with default attributes and without skeleton files
    #to set Quota we can just misuse any LDAP text field
    And LDAP config "LDAPTestId" has key "ldapQuotaAttribute" set to "employeeNumber"
    And the LDAP users have been resynced
    When the administrator changes the quota of user "Alice" to "13MB" using the provisioning API
    Then the OCS status code should be "<ocs-status-code>"
    And the HTTP status code should be "<http-status-code>"
    And the quota definition of user "Alice" should be "13 MB"
    When the LDAP users are resynced
    Then the quota definition of user "Alice" should be "13 MB"
    Examples:
      | ocs-api-version | ocs-status-code | http-status-code |
      | 1               | 100             | 200              |
      | 2               | 200             | 200              |

  @issue-core-33186
  Scenario Outline: admin sets quota of user for which no LDAP quota attribute is specified but a default quota is set in the LDAP settings
    Given using OCS API version "<ocs-api-version>"
    And user "Alice" has been created with default attributes and without skeleton files
    #to set Quota we can just misuse any LDAP text field
    And LDAP config "LDAPTestId" has key "ldapQuotaAttribute" set to "employeeNumber"
    And LDAP config "LDAPTestId" has key "ldapQuotaDefault" set to "10MB"
    And the LDAP users have been resynced
    When the administrator changes the quota of user "Alice" to "13MB" using the provisioning API
    Then the OCS status code should be "<ocs-status-code>"
    And the HTTP status code should be "<http-status-code>"
    And the quota definition of user "Alice" should be "13 MB"
    #And the quota definition of user "Alice" should be "10MB"
    And the LDAP users are resynced
    And the quota definition of user "Alice" should be "10MB"
    Examples:
      | ocs-api-version | ocs-status-code | http-status-code |
      | 1               | 100             | 200              |
      | 2               | 200             | 200              |
    # | 1               | 102             | 200              |
    # | 2               | 400             | 400              |

  Scenario Outline: admin sets quota of user in LDAP when a default quota is set in the LDAP settings
    Given using OCS API version "<ocs-api-version>"
    And user "Alice" has been created with default attributes and without skeleton files
    #to set Quota we can just misuse any LDAP text field
    And LDAP config "LDAPTestId" has key "ldapQuotaAttribute" set to "employeeNumber"
    And LDAP config "LDAPTestId" has key "ldapQuotaDefault" set to "10MB"
    And the LDAP users have been resynced
    When the administrator sets the ldap attribute "employeeNumber" of the entry "uid=Alice,ou=TestUsers" to "13 MB"
    Then the quota definition of user "Alice" should be "10MB"
    And the LDAP users are resynced
    And the quota definition of user "Alice" should be "13 MB"
    Examples:
      | ocs-api-version | ocs-status-code | http-status-code |
      | 1               | 100             | 200              |
      | 2               | 200             | 200              |

  @issue-core-33186
  Scenario Outline: admin sets quota of user when the quota LDAP attribute is specified and a default quota is set in the LDAP settings
    Given using OCS API version "<ocs-api-version>"
    And user "Alice" has been created with default attributes and without skeleton files
    #to set Quota we can just misuse any LDAP text field
    And LDAP config "LDAPTestId" has key "ldapQuotaAttribute" set to "employeeNumber"
    And LDAP config "LDAPTestId" has key "ldapQuotaDefault" set to "10MB"
    When the administrator sets the ldap attribute "employeeNumber" of the entry "uid=Alice,ou=TestUsers" to "11 MB"
    And the LDAP users are resynced
    And the administrator changes the quota of user "Alice" to "13MB" using the provisioning API
    Then the OCS status code should be "<ocs-status-code>"
    And the HTTP status code should be "<http-status-code>"
    And the quota definition of user "Alice" should be "13 MB"
    #And the quota definition of user "Alice" should be "11 MB"
    And the LDAP users are resynced
    And the quota definition of user "Alice" should be "11 MB"
    Examples:
      | ocs-api-version | ocs-status-code | http-status-code |
      | 1               | 100             | 200              |
      | 2               | 200             | 200              |
    # | 1               | 102             | 200              |
    # | 2               | 400             | 400              |

  Scenario Outline: Administrator deletes a ldap user and resyncs again
    Given using OCS API version "<ocs-api-version>"
    And user "Alice" has been created with default attributes and without skeleton files
    And user "Alice" has uploaded file with content "new file that should be overwritten after user deletion" to "textfile0.txt"
    When the administrator deletes user "Alice" using the provisioning API
    Then the OCS status code should be "<ocs-status-code>"
    And the HTTP status code should be "<http-status-code>"
    And user "Alice" should not exist
    When the LDAP users are resynced
    Then user "Alice" should exist
    And the content of file "textfile0.txt" for user "Alice" using password "123456" should be "ownCloud test text file 0" plus end-of-line
    Examples:
      | ocs-api-version | ocs-status-code | http-status-code |
      | 1               | 100             | 200              |
      | 2               | 200             | 200              |

  Scenario Outline: Administrator tries to create a user with same name as existing ldap user
    Given using OCS API version "<ocs-api-version>"
    And user "Alice" has been created with default attributes and skeleton files
    When the administrator sends a user creation request with the following attributes using the provisioning API:
      | username    | Alice        |
      | password    | %alt1%       |
      | displayname | Alice Hansen |
    Then the OCS status code should be "<ocs-status-code>"
    And the HTTP status code should be "<http-status-code>"
    And the API should not return any data
    And user "Alice" should exist
    And the content of file "textfile0.txt" for user "Alice" using password "123456" should be "ownCloud test text file 0" plus end-of-line
    But user "Alice" using password "%alt1%" should not be able to download file "textfile0.txt"
    Examples:
      | ocs-api-version | ocs-status-code | http-status-code |
      | 1               | 102             | 200              |
      | 2               | 400             | 400              |
