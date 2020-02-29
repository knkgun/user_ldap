OC.L10N.register(
    "user_ldap",
    {
    "The Base DN appears to be wrong" : "Enoznačno ime (DN) podatkovne zbirke je napačno",
    "Testing configuration…" : "Poteka preizkušanje nastavitev ...",
    "Configuration incorrect" : "Nastavitev ni ustrezna",
    "Configuration incomplete" : "Nastavitev je nepopolna",
    "Configuration OK" : "Nastavitev je ustrezna",
    "Select groups" : "Izberi skupine",
    "Select object classes" : "Izbor razredov predmeta",
    "Please check the credentials, they seem to be wrong." : "Preverite poverila! Najverjetneje so napačna.",
    "Please specify the port, it could not be auto-detected." : "Določiti je treba ustrezna vrata, ker jih ni mogoče samodejno zaznati.",
    "Base DN could not be auto-detected, please revise credentials, host and port." : "Osnovnega enoznačnega imena (DN) ni mogoče samodejno zaznati. Preverite poverila ter nastavitve gostitelja in vrat.",
    "Could not detect Base DN, please enter it manually." : "Ni mogoče zaznati osnovnega enoznačnega imena (DN). Vnesti ga bo treba ročno.",
    "{nthServer}. Server" : "{nthServer}. strežnik",
    "No object found in the given Base DN. Please revise." : "Ni najdenega predmeta v osnovnem enoznačnem imenu (DN). Preverite nastavitve.",
    "More than 1,000 directory entries available." : "Na voljo je več kot 1000 vnosov imenika",
    " entries available within the provided Base DN" : "vnosi, ki so na voljo znotraj razpoložljivega osnovnega enoznačnega imena (Base DN)",
    "An error occurred. Please check the Base DN, as well as connection settings and credentials." : "Prišlo je do napake. Preverite osnovno enoznačno ime, nastavitve povezave in poverila.",
    "Do you really want to delete the current Server Configuration?" : "Ali res želite izbrisati trenutne nastavitve strežnika?",
    "Confirm Deletion" : "Potrdi brisanje",
    "Mappings cleared successfully!" : "Preslikave so uspešno počiščene!",
    "Error while clearing the mappings." : "Napaka pri čiščenju preslikav.",
    "Anonymous bind is not allowed. Please provide a User DN and Password." : "Brezimne vezave niso dovoljene. Navedeno mora biti uporabniško enoznačno ime (DN) in geslo.",
    "LDAP Operations error. Anonymous bind might not be allowed." : "Napaka opravila LDAP: brezimne povezave morda niso dovoljene.",
    "Saving failed. Please make sure the database is in Operation. Reload before continuing." : "Shranjevanje je spodletelo. Prepričajte se, da je dostop do podatkovne zbirke omogočen. Pred nadaljevanjem je treba stran osvežiti.",
    "Switching the mode will enable automatic LDAP queries. Depending on your LDAP size they may take a while. Do you still want to switch the mode?" : "Preklop načina omogoči samodejne poizvedbe LDAP. Glede na velikost je lahko opravilo dolgotrajno. Ali res želite preklopiti način?",
    "Mode switch" : "Preklop načina",
    "Select attributes" : "Izbor atributov",
    "User not found. Please check your login attributes and username. Effective filter (to copy-and-paste for command line validation): <br/>" : "Uporabnika ni mogoče najti. Preverite atribute prijave in uporabniško ime. Učinkovit filter (za kopiranje overitve ukazne vrstice): <br/>",
    "User found and settings verified." : "Uporabnik je najden in nastavitve so overjene.",
    "An unspecified error occurred. Please check the settings and the log." : "Prišlo je do nedoločene napake. Preveriti je treba dnevnik in nastavitve.",
    "The search filter is invalid, probably due to syntax issues like uneven number of opened and closed brackets. Please revise." : "Filter iskanja ni veljaven. Najverjetneje je to zaradi napake skladnje, kot je neustrezno ali neskladno uporabljen oklepaj. Preverite vpis.",
    "A connection error to LDAP / AD occurred, please check host, port and credentials." : "Prišlo je do napake povezave z LDAP / AD. Preverite podatke o gostitelju, vratih in poverilih.",
    "The %uid placeholder is missing. It will be replaced with the login name when querying LDAP / AD." : "Manjka držalo %uid. Zamenjano bo z uporabniškim imenom pri poizvedbah LDAP / AD.",
    "Please provide a login name to test against" : "Vpisati je treba uporabniško ime za preizkus",
    "The group box was disabled, because the LDAP / AD server does not support memberOf." : "Skupina je onemogočena, ker na strežniku ni omogočena podpora atributu memberOf.",
    "Server" : "Strežnik",
    "Users" : "Uporabniki",
    "Login Attributes" : "Atributi prijave",
    "Groups" : "Skupine",
    "The configuration is invalid: anonymous bind is not allowed." : "Nastavitev ni veljavna: brezimne povezave niso dovoljene.",
    "The configuration is valid and the connection could be established!" : "Nastavitev je veljavna, zato je povezavo mogoče vzpostaviti!",
    "The configuration is valid, but the Bind failed. Please check the server settings and credentials." : "Nastavitev je veljavna, vendar pa je vez spodletela. Preveriti je treba nastavitve strežnika in ustreznost poveril.",
    "The configuration is invalid. Please have a look at the logs for further details." : "Nastavitev ni veljavna. Več podrobnosti o napaki je zabeleženih v dnevniku.",
    "Failed to delete the server configuration" : "Brisanje nastavitev strežnika je spodletelo.",
    "Failed to clear the mappings." : "Čiščenje preslikav je spodletelo.",
    "No data specified" : "Ni navedenih podatkov",
    " Could not set configuration %s" : "Ni mogoče uveljaviti nastavitev %s",
    "Action does not exist" : "Dejanje ne obstaja",
    "_%s group found_::_%s groups found_" : ["%s najdena skupina","%s najdeni skupini","%s najdene skupine","%s najdenih skupin"],
    "_%s user found_::_%s users found_" : ["%s najden uporabnik","%s najdena uporabnika","%s najdeni uporabniki","%s najdenih uporabnikov"],
    "Could not detect user display name attribute. Please specify it yourself in advanced ldap settings." : "Ni mogoče prebrati atributa prikaznega imena. Določiti ga je treba ročno med nastavitvami LDAP.",
    "Could not find the desired feature" : "Želene zmožnosti ni mogoče najti",
    "Test Configuration" : "Preizkusne nastavitve",
    "Help" : "Pomoč",
    "Groups meeting these criteria are available in %s:" : "Skupine, ki so skladne s kriterijem, so na voljo v %s:",
    "Only these object classes:" : "Le ti razredi predmetov:",
    "Only from these groups:" : "Le od skupin:",
    "Search groups" : "Iskanje skupin",
    "Available groups" : "Skupine na voljo",
    "Selected groups" : "Izbrane skupine",
    "Edit LDAP Query" : "Uredi poizvedbo LDAP",
    "LDAP Filter:" : "Filter LDAP:",
    "The filter specifies which LDAP groups shall have access to the %s instance." : "Filter določa, katere skupine LDAP bodo imele dostop do %s.",
    "Verify settings and count groups" : "Preveri nastavitve in preštej skupine",
    "When logging in, %s will find the user based on the following attributes:" : "Pri prijavi bodo prek %s najdeni uporabniki na osnovi navedenih atributov:",
    "LDAP / AD Username:" : "Uporabniško ime LDAP / AD:",
    "Allows login against the LDAP / AD username, which is either uid or samaccountname and will be detected." : "Omogoča prijavo prek LDAP / AD, ki je ali UID ali ime računa, ki bo zaznano.",
    "LDAP / AD Email Address:" : "Elektronski naslov LDAP / AD:",
    "Allows login against an email attribute. Mail and mailPrimaryAddress will be allowed." : "Dovoli prijavo z atributom elektronskega naslova. Dovoljena bosta naslova Mail and mailPrimaryAddress.",
    "Other Attributes:" : "Drugi atributi:",
    "Defines the filter to apply, when login is attempted. %%uid replaces the username in the login action. Example: \"uid=%%uid\"" : "Določi filter, ki bo uveljavljen ob poskusu prijave. %%uid zamenja uporabniško ime pri prijavi, na primer: \"uid=%%uid\"",
    "Test Loginname" : "Preizkusi prijavno ime",
    "Verify settings" : "Preveri nastavitve",
    "1. Server" : "1. strežnik",
    "%s. Server:" : "%s. strežnik:",
    "Add a new and blank configuration" : "In nova, privzeta nastavitev",
    "Copy current configuration into new directory binding" : "Kopiraj trenutne nastavitve v vezi nove mape.",
    "Delete the current configuration" : "Izbriši trenutne nastavitve",
    "Host" : "Gostitelj",
    "You can omit the protocol, except you require SSL. Then start with ldaps://" : "Protokol je lahko izpuščen, če ni posebej zahtevan SSL. V tem primeru se mora naslov začeti z ldaps://",
    "Port" : "Vrata",
    "User DN" : "Uporabnikovo enolično ime",
    "The DN of the client user with which the bind shall be done, e.g. uid=agent,dc=example,dc=com. For anonymous access, leave DN and Password empty." : "Enolično ime uporabnikovega odjemalca, s katerim naj se opravi vezava, npr. uid=agent,dc=example,dc=com. Za brezimni dostop sta polji prikaznega imena in gesla prazni.",
    "Password" : "Geslo",
    "For anonymous access, leave DN and Password empty." : "Za brezimni dostop naj bosta polji imena in gesla prazni.",
    "One Base DN per line" : "Eno osnovno enolično ime na vrstico",
    "You can specify Base DN for users and groups in the Advanced tab" : "Osnovno enolično ime za uporabnike in skupine lahko določite v zavihku naprednih možnosti.",
    "Detect Base DN" : "Zaznava osnovnega enoznačnega imena (DN)",
    "Test Base DN" : "Preizkus osnovnega enoznačnega imena (DN)",
    "Avoids automatic LDAP requests. Better for bigger setups, but requires some LDAP knowledge." : "Preusmeri samodejne zahteve LDAP. Nastavitev je priporočljiva za obsežnejše namestitve, vendar zahteva nekaj znanja o delu z LDAP.",
    "Manually enter LDAP filters (recommended for large directories)" : "Ročno vstavi filtre za LDAP (priporočljivo za obsežnejše mape).",
    "%s access is limited to users meeting these criteria:" : "Dostop do %s je omejen na uporabnike, ki zadostujejo kriterijem:",
    "The most common object classes for users are organizationalPerson, person, user, and inetOrgPerson. If you are not sure which object class to select, please consult your directory admin." : "Najobičajnejši razredi predmetov za uporabnike so organizationalPerson, person, user in inetOrgPerson. Če niste prepričani, katerega izbrati, se posvetujte s skrbnikom mape.",
    "The filter specifies which LDAP users shall have access to the %s instance." : "Filter določa, kateri uporabniki LDAP bodo imeli dostop do %s.",
    "Verify settings and count users" : "Preveri nastavitve in preštej uporabnike",
    "Saving" : "Poteka shranjevanje ...",
    "Back" : "Nazaj",
    "Continue" : "Nadaljuj",
    "LDAP" : "LDAP",
    "Expert" : "Napredno",
    "Advanced" : "Napredne možnosti",
    "<b>Warning:</b> Apps user_ldap and user_webdavauth are incompatible. You may experience unexpected behavior. Please ask your system administrator to disable one of them." : "<b>Opozorilo:</b> določili user_ldap in user_webdavauth sta  neskladni, kar lahko vpliva na delovanje sistema. O napaki pošljite poročilo skrbniku sistema in opozorite, da je treba eno izmed možnosti onemogočiti.",
    "<b>Warning:</b> The PHP LDAP module is not installed, the backend will not work. Please ask your system administrator to install it." : "<b>Opozorilo:</b> modul PHP LDAP mora biti nameščen, sicer vmesnik ne bo deloval. Paket je treba namestiti.",
    "Connection Settings" : "Nastavitve povezave",
    "Configuration Active" : "Dejavna nastavitev",
    "When unchecked, this configuration will be skipped." : "Neizbrana možnost preskoči nastavitev.",
    "Backup (Replica) Host" : "Varnostna kopija (replika) podatkov gostitelja",
    "Give an optional backup host. It must be a replica of the main LDAP/AD server." : "Podati je treba izbirno varnostno kopijo gostitelja. Ta mora biti natančna replika strežnika LDAP/AD.",
    "Backup (Replica) Port" : "Vrata varnostne kopije (replike)",
    "Disable Main Server" : "Onemogoči glavni strežnik",
    "Only connect to the replica server." : "Poveži le s podvojenim strežnikom.",
    "Turn off SSL certificate validation." : "Onemogoči določanje veljavnosti potrdila SSL.",
    "Not recommended, use it for testing only! If connection only works with this option, import the LDAP server's SSL certificate in your %s server." : "Možnosti ni priporočljivo uporabiti; namenjena je zgolj preizkušanju! Če deluje povezava le s to možnostjo, je treba uvoziti potrdilo SSL strežnika LDAP na strežnik %s.",
    "Cache Time-To-Live" : "Predpomni podatke TTL",
    "in seconds. A change empties the cache." : "v sekundah. Sprememba izprazni predpomnilnik.",
    "Directory Settings" : "Nastavitve mape",
    "User Display Name Field" : "Polje za uporabnikovo prikazano ime",
    "The LDAP attribute to use to generate the user's display name." : "Atribut LDAP za uporabo pri ustvarjanju prikaznega imena uporabnika.",
    "2nd User Display Name Field" : "Polje 2. prikaznega imena uporabnika",
    "Optional. An LDAP attribute to be added to the display name in brackets. Results in e.g. »John Doe (john.doe@example.org)«." : "Izbirno. Atribut LDAP, ki bo v oklepaju dodan prikazanemu imenu. Naziv bo pokazan kot na primer »Janez Novak (janez.novak@primer.org)«.",
    "Base User Tree" : "Osnovno uporabniško drevo",
    "One User Base DN per line" : "Eno osnovno uporabniško ime na vrstico",
    "User Search Attributes" : "Uporabnikovi atributi iskanja",
    "Optional; one attribute per line" : "Izbirno; en atribut na vrstico",
    "Each attribute value is truncated to 191 characters" : "Vsaka vrednost atributa je prirezana na 191 znakov",
    "Group Display Name Field" : "Polje za prikazano ime skupine",
    "The LDAP attribute to use to generate the groups's display name." : "Atribut LDAP za uporabo pri ustvarjanju prikaznega imena skupine.",
    "Base Group Tree" : "Osnovno drevo skupine",
    "One Group Base DN per line" : "Eno osnovno ime skupine na vrstico",
    "Group Search Attributes" : "Skupinski atributi iskanja",
    "Group-Member association" : "Povezava član-skupina",
    "Dynamic Group Member URL" : "Naslov URL člana dinamična skupine",
    "The LDAP attribute that on group objects contains an LDAP search URL that determines what objects belong to the group. (An empty setting disables dynamic group membership functionality.)" : "Atribut LDAP, ki vsebuje na predmetih skupine naslov URL za določanje, kateri predmeti sodijo v skupino (prazno polje onemogoči dinamično iskanje po skupini).",
    "Nested Groups" : "Gnezdene skupine",
    "When switched on, groups that contain groups are supported. (Only works if the group member attribute contains DNs.)" : "Možnost omogoča podporo skupinam, ki vključujejo skupine. Deluje je, če atribut članstva skupine vsebuje enolično ime (DN).",
    "Paging chunksize" : "Velikost odvoda za razbremenitev delovnega pomnilnik",
    "Chunksize used for paged LDAP searches that may return bulky results like user or group enumeration. (Setting it 0 disables paged LDAP searches in those situations.)" : "Velikost odvoda za razbremenitev delovnega pomnilnika, ki ga uporablja iskalnik LDAP, pri oštevilčenju uporabnika ali skupine (vrednost 0 možnost onemogoči).",
    "Special Attributes" : "Posebni atributi",
    "Quota Field" : "Polje količinske omejitve",
    "Quota Default" : "Privzeta količinska omejitev",
    "Email Field" : "Polje elektronske pošte",
    "User Home Folder Naming Rule" : "Pravila poimenovanja uporabniške osebne mape",
    "Leave empty for user name (default). Otherwise, specify an LDAP/AD attribute." : "Pustite prazno za uporabniško ime (privzeto), sicer navedite atribut LDAP/AD.",
    "Internal Username" : "Programsko uporabniško ime",
    "By default the internal username will be created from the UUID attribute. It makes sure that the username is unique and characters do not need to be converted. The internal username has the restriction that only these characters are allowed: [ a-zA-Z0-9_.@- ].  Other characters are replaced with their ASCII correspondence or simply omitted. On collisions a number will be added/increased. The internal username is used to identify a user internally. It is also the default name for the user home folder. It is also a part of remote URLs, for instance for all *DAV services. With this setting, the default behavior can be overridden. To achieve a similar behavior as before ownCloud 5 enter the user display name attribute in the following field. Leave it empty for default behavior. Changes will have effect only on newly mapped (added) LDAP users." : "Privzeto je notranje uporabniško ime ustvarjeno na osnovi atributa UUID. To omogoča določitev uporabniškega imena kot enoličnega, zato znakov ni treba pretvarjati. Notranje ime je omejeno na standardne znake: [ a-zA-Z0-9_.@- ]. Morebitni drugi znaki so zamenjani z ustreznim ASCII znakom, ali pa so enostavno izpuščeni. V primeru sporov je prišteta ali odšteta številčna vrednost. Notranje uporabniško ime je uporabljeno za določanje uporabnika in je privzeto ime uporabnikove domače mape. Hkrati je tudi del oddaljenega naslova URL, na primer za storitve *DAV. S to nastavitvijo je prepisan privzet način delovanja. Pri različicah ownCloud, nižjih od 5.0, je podoben učinek mogoče doseči z vpisom prikaznega imena oziroma z neizpolnjenim (praznim) poljem te vrednosti. Spremembe bodo uveljavljene le za nove preslikane (dodane) uporabnike LDAP.",
    "Internal Username Attribute:" : "Programski atribut uporabniškega imena:",
    "Override UUID detection" : "Prezri zaznavo UUID",
    "By default, the UUID attribute is automatically detected. The UUID attribute is used to doubtlessly identify LDAP users and groups. Also, the internal username will be created based on the UUID, if not specified otherwise above. You can override the setting and pass an attribute of your choice. You must make sure that the attribute of your choice can be fetched for both users and groups and it is unique. Leave it empty for default behavior. Changes will have effect only on newly mapped (added) LDAP users and groups." : "Privzeto je atribut UUID samodejno zaznan. Uporabljen je za določevanje uporabnikov LDAP in skupin. Notranje uporabniško ime je določeno prav na atributu UUID, če ni določeno drugače. To nastavitev je mogoče prepisati in poslati poljuben atribut. Zagotoviti je treba le, da je ta pridobljen kot enolični podatek za uporabnika ali skupino. Prazno polje določa privzeti način. Spremembe bodo vplivale na novo preslikane (dodane) uporabnike LDAP in skupine.",
    "UUID Attribute for Users:" : "Atribut UUID za uporabnike:",
    "UUID Attribute for Groups:" : "Atribut UUID za skupine:",
    "Username-LDAP User Mapping" : "Uporabniška preslikava uporabniškega imena na LDAP",
    "Usernames are used to store and assign (meta) data. In order to precisely identify and recognize users, each LDAP user will have an internal username. This requires a mapping from username to LDAP user. The created username is mapped to the UUID of the LDAP user. Additionally the DN is cached as well to reduce LDAP interaction, but it is not used for identification. If the DN changes, the changes will be found. The internal username is used all over. Clearing the mappings will have leftovers everywhere. Clearing the mappings is not configuration sensitive, it affects all LDAP configurations! Never clear the mappings in a production environment, only in a testing or experimental stage." : "Uporabniška imena so uporabljena za shranjevanje in dodeljevanje (meta) podatkov. Za natančno določanje in prepoznavanje uporabnikov je uporabljen sistem notranjega uporabniškega imena vsakega uporabnika LDAP. Ta možnost zahteva preslikavo uporabniškega imena v uporabnika LDAP in preslikano na njegov UUID. Sistem predpomni enolična imena za zmanjšanje odvisnosti LDAP, vendar pa ta podatek ni uporabljen za določevanje uporabnika. Če se enolično ime spremeni, se spremeni notranje uporabniško ime. Čiščenje preslikav pušča ostanke podatkov in vpliva na vse nastavitve LDAP! V delovnem okolju zato spreminjanje preslikav ni priporočljivo, možnost pa je na voljo za preizkušanje.",
    "Clear Username-LDAP User Mapping" : "Izbriši preslikavo uporabniškega imena na LDAP",
    "Clear Groupname-LDAP Group Mapping" : "Izbriši preslikavo skupine na LDAP"
},
"nplurals=4; plural=(n%100==1 ? 0 : n%100==2 ? 1 : n%100==3 || n%100==4 ? 2 : 3);");
