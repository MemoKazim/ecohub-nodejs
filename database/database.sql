create database ecohub;
use ecohub;
ALTER DATABASE ecohub CHARACTER SET utf8 COLLATE utf8_unicode_ci;
show tables;

CREATE TABLE `index` 
(
    project_id INT PRIMARY KEY AUTO_INCREMENT,
    project_title_az VARCHAR(150) NOT NULL, 
    project_title_en VARCHAR(150) NOT NULL, 
    project_image_name VARCHAR(50) NOT NULL
) ENGINE = InnoDB;

INSERT INTO `index` 
(`project_id`,`project_title_az`,`project_title_en`,`project_image_name`) 
VALUES 
(5,'Tullantısız dünya','Tullantısız dünya','3M3A5429.jpg'),
(6,'Təmiz Sumqayıt','Təmiz Sumqayıt','B47A6397.jpg'),
(7,'Xəzəri Qoruyaq','Xəzəri Qoruyaq','xq.jpg'),
(8,'Coca-Cola Horeca','Coca-Cola Horeca','IMG_9283.jpg');


CREATE TABLE `news` 
(
    new_id INT PRIMARY KEY AUTO_INCREMENT,
    new_title_az VARCHAR(150) NOT NULL, 
    new_title_en VARCHAR(150) NOT NULL, 
    new_date DATE NOT NULL,
    new_images JSON NOT NULL,
    new_cover   VARCHAR(255) NOT NULL,
    new_content_az MEDIUMTEXT NOT NULL,
    new_content_en MEDIUMTEXT NOT NULL
) ENGINE = InnoDB;

INSERT INTO `news` 
(`new_id`,`new_title_az`,`new_title_en`,`new_date`,`new_images`,`new_cover`,`new_content_az`,`new_content_en`) 
VALUES 
(1,'Ecohub Ekoloji platformasının icraçı partnyorluğunun keçirdiyi layihə Qəbələdə!','The project of Ecohub environmental executive partnership is in Gabala!','2022-06-07','[\"B47A8768.jpg\"]','B47A8768.jpg','Qəbələ şəhərində \"Tullantısız Dünya\" proqramı çərçivəsində icra olunacaq \"Təmiz Qəbələ\" layihəsinə start verilib. \"Coca-Cola\" Fondunun dəstəyi, Ecohub Ekoloji platformasının icraçı partnyorluğu, Ekologiya və Təbii Sərvətlər Nazirliyinin və yerli icra hakimiyyətlərinin əməkdaşlığı ilə həyata keçirilən layihə növbəti mərhələlərdə Sumqayıt, Mingəçevir və Quba şəhərlərində təşkil ediləcək. \"Tullantısız Dünya\" proqramının icra olunmasında məqsəd plastik tullantıları toplayıb təkrar emala yönəltməkdir. 2022-ci ilin sonuna qədər proqram çərçivəsində 300 ton plastikin toplanılaraq təkrar emala cəlb edilməsi planlaşdırılır. Həmin regionlarda yığımı həyata keçirmək üçün \"ASAN xidmət\" mərkəzlərinə irihəcmli tullantı qutuları yerləşdirilib. Bununla yanaşı, yığım prosesinə qeyd olunan regionlarda təhsil müəssisələri və müxtəlif obyektlərin də cəlb olunması planlaşdırılır. Eyni zamanda, layihə çərçivəsində yığım işi ilə yanaşı, əhali arasında təbliğat prosesləri və ekoloji rəy sorğuları da keçiriləcək. Layihə üzrə sorğu və maarifləndirmə işinin məqsədi əhali arasında təkrar emalla və tullantıların çeşidlənməsi ilə bağlı məlumatlılığın artırılması, eləcə də onların çeşidləmə ilə bağlı təkliflərini toplamaq və həmin dinamikanı ilbəil izləməkdir. Pilot olaraq plastiklərin toplanmasını ehtiva edən bu layihə gələcəkdə digər qablaşdırma tullantılarının da toplanmasını və təkrar emala göndərilməsini planlaşdırır. Qəbələ \"ASAN xidmət\" mərkəzində baş tutan tədbirdə könüllülərə \"Ətraf mühitin mühafizəsi və təkrar emal mövzusunda\" seminar təşkil olunub. Seminarda gənclər təlimçi-ekoloq tərəfindən ekoloji istiqamətdə və plastiklərin ətraf mühitə mənfi təsirləri, onların aradan qaldırılması ilə bağlı məlumatlandırılıblar. ','In the city of Gabala, the \"Clean Gabala\" project, which will be implemented within the framework of the \"World Without Waste\" program, has been launched. The project implemented with the support of \"Coca-Cola\" Foundation, Ecohub ecological executive partnership, the cooperation of the Ministry of Ecology and Natural Resources and local executive authorities will be organized in the next stages in the cities of Sumgait, Mingachevir and Guba. The goal of the \"Waste-Free World\" program is to collect and recycle plastic waste. By the end of 2022, it is planned to collect and recycle 300 tons of plastic within the program. In order to carry out the collection in those regions, large waste bins have been placed in \"ASAN service\" centers. In addition, it is planned to involve educational institutions and various objects in the mentioned regions in the collection process. At the same time, in addition to collection work within the project, publicity processes and environmental opinion polls will be held among the population. The aim of the survey and education work on the project is to increase the awareness among the population about recycling and waste sorting, as well as to collect their suggestions about sorting and to monitor those dynamics from year to year. This project, which includes the collection of plastics as a pilot, plans to collect and recycle other packaging waste in the future. A seminar on \"Environmental protection and recycling\" was organized for volunteers at the event held at \"ASAN service\" center in Gabala. At the seminar, the young people were informed by the trainer-ecologist in the ecological direction and about the negative effects of plastics on the environment and their elimination.'),
(2,'Ecohub Ekoloji platformasının icraçı partnyorluğu \"Tullantısız Dünya\" proqramı üzrə fəaliyyətə başlayıb! ','The project of Ecohub environmental executive partnership is in Gabala! ','2022-04-29','[\"AF6O8296.jpg\", \"AF6O8305.jpg\", \"AF6O8320.jpg\", \"AF6O8380.jpg\", \"AF6O8466.jpg\", \"AF6O8483.jpg\", \"AF6O8489.jpg\", \"AF6O8172.jpg\", \"AF6O8546.jpg\", \"AF6O8544.jpg\", \"AF6O8518.jpg\"]','AF6O8380.jpg','Aprelin 28-də Şamaxı şəhərində \"Tullantısız Dünya\" proqramı çərçivəsində icra olunacaq layihəyə start verilib.Bu qlobal proqram ölkəmizdə plastik tullantıların ətraf mühitə mənfi təsirinin azaldılması məqsədilə \"Coca-Cola\" şirkəti tərəfindən icra olunur.\"Coca-Cola\" Fondunun dəstəyi, Ecohub Ekoloji platformasının icraçı partnyorluğu, Ekologiya və Təbii Sərvətlər Nazirliyinin və yerli icra hakimiyyətlərinin əməkdaşlığı ilə həyata keçirilən layihə növbəti mərhələlərdə Gəncə, Sumqayıt, Mingəçevir, Qəbələ və Quba şəhərlərində təşkil ediləcək.\"Tullantısız Dünya\" proqramı çərçivəsində ekoloji rəy sorğuları keçiriləcək. Layihə üzrə sorğunun aparılmasında məqsəd əhali arasında təkrar emala və tullantıların çeşidlənməsinə münasibəti öyrənmək, eləcə də onların çeşidləmə ilə bağlı təkliflərini toplamaq və bu dinamikanı ilbəil izləməkdir. Toplanmış və emal edilmiş sorğu nəticələri əsasında müvafiq addımların atılması üçün aidiyyəti qurumlarla birlikdə effektiv mexanizmlər işlənib hazırlanacaq. Pilot olaraq plastiklərin toplanmasını ehtiva edən həmin layihə gələcəkdə digər qablaşdırma tullantılarının da toplanmasını və təkrar emala göndərilməsini planlaşdırır.Müxtəlif əhali qrupları və ictimai-iaşə müəssisələri arasında maarifləndirmə işləri ilə yanaşı, məktəblilər üçün də xüsusi proqramlar təşkil ediləcək, onların bu istiqamətdə məlumatlılığının artırılması üçün qabaqcıl maarifləndirmə təcrübələrindən istifadə olunacaq.Tədbirdə könüllülərin təqdimatında məktəblilər üçün maarifləndirici \"Tıq-tıq xanım\" ekotamaşası nümayiş etdirilib və mədəniyyət carçılarının musiqi nömrələri ifa olunub. ','In the city of Gabala, the \"Clean Gabala\" project, which will be implemented within the framework of the \"World Without Waste\" program, has been launched. The project implemented with the support of \"Coca-Cola\" Foundation, Ecohub ecological executive partnership, the cooperation of the Ministry of Ecology and Natural Resources and local executive authorities will be organized in the next stages in the cities of Sumgait, Mingachevir and Guba. The goal of the \"Waste-Free World\" program is to collect and recycle plastic waste. By the end of 2022, it is planned to collect and recycle 300 tons of plastic within the program. In order to carry out the collection in those regions, large waste bins have been placed in \"ASAN service\" centers. In addition, it is planned to involve educational institutions and various objects in the mentioned regions in the collection process. At the same time, in addition to collection work within the project, publicity processes and environmental opinion polls will be held among the population. The aim of the survey and education work on the project is to increase the awareness among the population about recycling and waste sorting, as well as to collect their suggestions about sorting and to monitor those dynamics from year to year. This project, which includes the collection of plastics as a pilot, plans to collect and recycle other packaging waste in the future. A seminar on \"Environmental protection and recycling\" was organized for volunteers at the event held at \"ASAN service\" center in Gabala. At the seminar, the young people were informed by the trainer-ecologist in the ecological direction and about the negative effects of plastics on the environment and their elimination. '),
(3,'Ecohub Ekoloji platformasının icraçı partnyorluğu əhali arasında ekoloji sorğular keçirir! ','Ecohub, an environmental executive partnership, conducts environmental surveys among the public! ','2021-04-20','[\"B47A2083.jpg\", \"B47A2096.jpg\", \"B47A2198.jpg\"]','B47A2096.jpg','Qablaşdırma tullantılarının çeşidlənməsi və toplanaraq təkrar emala göndərilməsinə cəlb məqsədilə icra olunan \"Təmiz Sumqayıt\" layihəsi çərçivəsində ekoloji sorğular keçirilir. Layihə üzrə sorğunun aparılmasında məqsəd əhali arasında çeşidləmə ilə bağlı fikirləri, eləcə də onların çeşidləməyə, təkrar emala və tullantıların çeşidlənməsi üzrə layihələrə münasibətini öyrənməkdir. Toplanmış və təhlil edilmiş nəticələr əsasında müvafiq addımların atılması, maarifləndirmə işlərinin genişləndirilməsi nəzərdə tutulur. Sumqayıt şəhərində sorğuların təşkilinə dayanıqlı inkişaf, ekologiya, təkrar emal, sorğuların tərtibi və emalı təlimlərində iştirak etmiş ASAN könüllüləri və eko-könüllülər cəlb olunublar. Qeyd edək ki, \"Təmiz Sumqayıt\" layihəsi Ecohub Ekoloji platformasının icraçı partnyorluğu, Ekologiya və Təbii Sərvətlər Nazirliyinin, Sumqayıt Şəhər İcra Hakimiyyətinin əməkdaşlığı və \"Coca-Cola\", \"Carlsberg\", \"Unilever\" kimi bir sıra aparıcı şirkətlərin dəstəyi ilə icra olunur. Layihə üzrə 4 növ tullantı – şüşə, kağız, plastik və metal çeşidlənərək müxtəlif konteynerlərdə toplanır və sonra yenidən emal müəssisələrinə göndərilir. Tullantıların çeşidlənməsi çirklənmənin qarşısının alınması, təbii ehtiyatların qorunması, enerjiyə qənaət etməklə yanaşı, iqtisadiyyata töhfə verir. Qablaşdırma tullantılarını çeşidləyərək təkrar emala cəlb etmək təbii ehtiyatlardan səmərəli istifadə edilməsinə geniş imkanlar yaradır. ','Environmental surveys are conducted within the framework of the \"Clean Sumgayit\" project, which is carried out in order to involve packaging waste sorting and collection and sending for recycling. The purpose of the project survey is to find out the opinions of the population about sorting, as well as their attitudes towards sorting, recycling and waste sorting projects. On the basis of the collected and analyzed results, it is planned to take appropriate steps and expand the educational activities. ASAN volunteers and eco-volunteers who took part in trainings on sustainable development, ecology, recycling, compilation and processing of surveys were involved in the organization of surveys in Sumgayit city. It should be noted that the \"Clean Sumgayit\" project is implemented with the support of the Ecohub ecological executive partnership, the cooperation of the Ministry of Ecology and Natural Resources, the Sumgayit City Executive Authority and a number of leading companies such as \"Coca-Cola\", \"Carlsberg\", \"Unilever\". According to the project, 4 types of waste - glass, paper, plastic and metal are sorted and collected in different containers and then sent to processing facilities. Waste sorting contributes to the economy in addition to preventing pollution, conserving natural resources, saving energy. Sorting and recycling packaging waste creates ample opportunities for efficient use of natural resources. '),
(4,'\"Təmiz Sumqayıt\" ekoloji layihəsinə start verilir ','\"Clean Sumgait\" ecological project is launched','2020-12-02','[\"new-4.jpg\"]','new-4.jpg','Təkrar emal vasitəsilə məişət tullantılarının həcmini azaltmaq üçün bu ilin dekabr ayından Azərbaycanda yeni pilot layihəyə start verilir. Sumqayıt şəhərindən başlanan \"Təmiz Sumqayıt\" layihəsinin məqsədi əhalini məişət tullantılarını çeşidləməyə, toplanıb təkrar emala göndərilməsinə cəlb etməkdir. Plastik qablaşdırma tullantılarının səmərəli idarə olunması sisteminin praktik olaraq həyata keçirilməsini və gələcəkdə bütün ölkə ərazisində tətbiqini nəzərdə tutan layihə çərçivəsində Sumqayıt şəhərində müvafiq konteynerlər yerləşdiriləcək, əhali arasında məişət tullantılarının çeşidlənməsini təbliğ edən maarifləndirmə tədbirləri təşkil ediləcək: \"Layihədə dövlət, özəl sektor və qeyri-hökumət təşkilatlarının əməkdaşlığı çərçivəsində ETSN ilə birlikdə ASAN könüllüləri, \"Coca-Cola\", \"Carlsberg\", \"Unilever\", \"Veysəloğlu\", \"AzEcol\", \"AzerSun\" kimi bir sıra özəl şirkətlər iştirak edəcəklər\". Səyyarə Məmmədovanın sözlərinə görə, 2020-nin dekabrından 2021-ci ilin aprelinədək davam edəcək fəaliyyət 4 növ tullantının – şüşə, kağız, plastik və metalın çeşidlənərək müxtəlif konteynerlərdə toplanılmasını, yenidən emal müəssisələrinə göndərilməsini nəzərdə tutur və qabaqcıl beynəlxalq təcrübəyə əsaslanan layihə \"Azərbaycan Respublikasında bərk məişət tullantılarının idarə edilməsinin təkmilləşdirilməsinə dair 2018–2022-ci illər üçün Milli Strategiya\"ya uyğun hazırlanıb. ','In order to reduce the amount of household waste through recycling, a new pilot project has been launched in Azerbaijan since December of this year. The goal of the \"Clean Sumgayit\" project, which started in the city of Sumgayit, is to involve the population in sorting household waste, collecting it and sending it for recycling. In the framework of the project, which envisages the practical implementation of the efficient management system of plastic packaging waste and its future application throughout the country, appropriate containers will be placed in the city of Sumgait, and educational events will be organized to promote the sorting of household waste among the population: within the framework of cooperation with ETSN, ASAN volunteers, a number of private companies such as \"Coca-Cola\", \"Carlsberg\", \"Unilever\", \"Veysaloglu\", \"AzEcol\", \"AzerSun\" will participate. According to Sayyare Mammadova, the activity, which will last from December 2020 to April 2021, envisages the sorting and collection of 4 types of waste - glass, paper, plastic and metal in different containers, and sending them to reprocessing facilities, and the project based on advanced international experience \"solid household in the Republic of Azerbaijan was prepared in accordance with the National Strategy for 2018-2022 on the improvement of waste management. '),
(5,'\"Xəzəri qoruyaq!\" aksiyası davam edir ','\"Let\'s protect the Khazar!\" action continues ','2022-09-28','[\"Coca-Cola-CoastalCleanUp-AZE-video.mp4\"]','new-5.jpg','Beynəlxalq Sahilyanı Təmizlik Günü Azərbaycanda \"Xəzəri qoruyaq!\" şüarı ilə bütün Xəzər sahili əraziləri əhatə edir. Aksiya sentyabrın 7-dən 16-dək Xaçmaz, Şabran, Siyəzən, Sumqayıt, Neftçala, Lənkəran və Astarada təşkil olunub. Sentyabrın 28-29-da və oktyabrın 1-də isə ümumilikdə mindən çox könüllünün iştirakı ilə Bakı şəhərində irimiqyaslı aksiyalar şəklində davam edəcək. Nazirliyin Ekoloji maarifləndirmə və ictimaiyyətlə əlaqələr şöbəsinin müdiri Səyyarə Məmmədova bildirib ki, \"Xəzəri qoruyaq!\" təmizlik aksiyasının keçirilməsində məqsəd ölkədə ekoloji durumun yaxşılaşdırılması, əhalinin bu sahədə maarifləndirilməsi və ətraf mühitə məsuliyyətli yanaşma prinsiplərini təbliğ etməkdir. \"Bu il \"Xəzəri qoruyaq!\" Beynəlxalq Sahilyanı Təmizlik aksiyası Ekologiya və Təbii Sərvətlər Nazirliyinin, \"ASAN xidmət\" mərkəzinin, \"ASAN Könüllüləri\" Təşkilatının dəstəyi, \"Coca-Cola\", \"Carlsberg Azerbaijan\", \"PAŞA Bank\" və \"Bakcell\" şirkətlərinin tərəfdaşlığı və \"EcoHub\" ekoloji platformasının icraçı tərəfdaşlığı ilə təşkil olunur. Qeyd edək ki, son 30 ildə dünyanın 100-dən çox ölkəsində qeyd olunan Beynəlxalq Sahilyanı Təmizlik Günü Yer kürəsində su hövzələri sahillərinin tullantılardan təmizlənməsinə yönələn ən irimiqyaslı könüllü hərəkatıdır. Azərbaycan da həmin beynəlxalq ekoloji aksiyada \"Xəzəri qoruyaq\" şüarı ilə artıq 10 ildən çoxdur ki, iştirak edir və ildən-ilə aksiyanın miqyası genişlənir\", - deyə S.Məmmədova qeyd edib. S.Məmmədovanın sözlərinə görə, Azərbaycanda son 10 il ərzində keçirilən \"Xəzəri qoruyaq!\" Beynəlxalq Sahilyanı Təmizlik aksiyaları çərçivəsində Xəzər dənizinin çimərliklərinin 45 hektaradək ərazisi təxminən 40 ton məişət tullantısından təmizlənib. Təmizlənən ərazilərdən toplanan tullantılar qeydə alınaraq məlumatlar \"Ocean Conservancy\" beynəlxalq təşkilatına göndərilir. Həmin məlumatlar isə öz növbəsində dünya su hövzələrinin təmizlənməsi haqqında ölkələr üzrə beynəlxalq hesabatlarda əks olunur. ','International Coastal Cleanup Day in Azerbaijan \"Let\'s protect the Caspian!\" covers all the Caspian coastal areas with its motto. The action was organized from September 7 to 16 in Khachmaz, Shabran, Siyazan, Sumgait, Neftchala, Lankaran and Astara. On September 28-29 and October 1, it will continue in the form of large-scale actions in Baku with the participation of more than a thousand volunteers. Sayyara Mammadova, head of the Ministry\'s Environmental Education and Public Relations Department, said, \"Let\'s protect the Caspian!\" The purpose of the cleaning campaign is to improve the ecological situation in the country, to educate the population in this area and to promote the principles of a responsible approach to the environment. \"This year, let\'s protect the Caspian!\" The International Coastal Cleanup campaign is supported by the Ministry of Ecology and Natural Resources, the \"ASAN service\" center, the \"ASAN Volunteers\" Organization, the partnership of \"Coca-Cola\", \"Carlsberg Azerbaijan\", \"PASHA Bank\" and \"Bakcell\" companies, and the ecological platform \"EcoHub\". organized by executive partnership. It should be noted that the International Coastal Cleanup Day, which has been celebrated in more than 100 countries in the last 30 years, is the largest voluntary movement on Earth aimed at cleaning the shores of water bodies from waste. \"Azerbaijan has been participating in that international environmental action with the slogan \"Let\'s protect the Caspian\" for more than 10 years, and the scale of the action is expanding year by year,\" said S. Mammadova. According to S. Mammadova, \"Let\'s protect the Caspian!\" held in Azerbaijan over the last 10 years. As part of the International Coastal Cleaning actions, the area of ​​the Caspian Sea beaches up to 45 hectares was cleaned of about 40 tons of household waste. The waste collected from the cleaned areas is registered and the information is sent to the international organization \"Ocean Conservancy\". Those data, in turn, are reflected in the international reports on the cleaning of the world\'s water bodies. '),
(6,'Ecohub Ağacəkmə layihəsi ','Ecohub Tree Planting Project ','2022-10-29','[\"agacekme.mp4\"]','IMG_7654.png','29 oktyabr 2022 -ci il tarixində EcoHub Ekoloji Platformasının təşkilatçılığı, \"Japan Tobacco International\" (JTI) şirkətinin Azərbaycandakı nümayəndəliyinin dəstəyi və \"Tabaterra\" Qapalı Səhmdar Cəmiyyətinin tərəfdaşlığı ilə Sumqayıt Sənaye Parkında yerləşən Tabaterra zavodunun ərazisində ağacəkmə aksiyası keçirilib. Aksiyada tərəfdaşların əməkdaşları ilə birlikdə 200-dən çox ağacları əkilib, abadlıq işləri aparılaraq ağacların dibi yumşaldılıb, yaşıllıqlara aqrotexniki qulluq göstərilib. Aksiyanın keçirilməsində məqsəd ağac əkməklə ekoloji tarazlığın bərpasına, ətraf mühitin qorunmasına kömək etmək, atmosferi oksigenlə zənginləşdirmək, ictimaiyyətin diqqətini yaşıllıqların qorunmasına yönəltməkdir. EcoHub-ın bu cür ekoloji aksiyaları mütəmadi olaraq təşkil etməkdə məqsədi ətraf mühitin mühafizəsinin vacibliyini insanların, xüsusilə, gənc nəslin və müxtəlif şirkətlərin ekoloji problemlərə qarşı mübarizədə aktivliyini artırılmasıdır. ','On October 29, 2022, a tree-planting action was held on the territory of the Tabaterra plant located in the Sumgayit Industrial Park with the organization of the EcoHub Ecological Platform, the support of the representative office of \"Japan Tobacco International\" (JTI) in Azerbaijan and the partnership of \"Tabaterra\" Closed Joint Stock Company. In the campaign, more than 200 trees were planted together with the employees of the partners, landscaping works were carried out, the bottom of the trees was softened, and agrotechnical care was provided to the greenery. The purpose of the campaign is to help restore the ecological balance by planting trees, protect the environment, enrich the atmosphere with oxygen, and direct the public\'s attention to the protection of greenery. The purpose of EcoHub in regularly organizing such environmental actions is to increase the importance of environmental protection to people, especially the young generation, and to increase the activity of various companies in the fight against environmental problems. ');


CREATE TABLE `employees` 
(
    employee_id INT PRIMARY KEY AUTO_INCREMENT,
    employee_name VARCHAR(40), 
    employee_job_az VARCHAR(30) NOT NULL, 
    employee_job_en VARCHAR(30) NOT NULL, 
    employee_email VARCHAR(50) NOT NULL, 
    employee_image VARCHAR(50)
) ENGINE = InnoDB;

INSERT INTO `employees` 
(`employee_id`,`employee_name`,`employee_job_az`,`employee_job_en`,`employee_email`,`employee_image`) 
VALUES 
(1,'Tükəz Hüseynova','Direktor','Director','t.huseynova@ecohub.az','Tukez.jpg'),
(2,'Əlirza Əliyev','Baş maliyyə inzibatçısı','Chief financial officer','a.aliyev@ecohub.az','Alirza.jpg'),
(3,'Rauf Zeynalov','Chief digital officer','Chief digital officer','r.zeynalov@ecohub.az','Rauf.jpeg'),
(4,'Elnur Əliyev','Investor','Impact investor','e.aliyev@ecohub.az','Elnur.jpeg'),
(5,'Əsəd Rəsullu','Chief sustainability officer','Chief sustainability officer','a.rasullu@ecohub.az',NULL),
(6,'Ceyhun Haqverdiyev','Chief legal officer','Chief legal officer','c.hagverdiyev@ecohub.az',NULL),
(7,'Səbuhi İbişov','Layihə mütəxəssisi','Project specialist','s.ibishov@ecohub.az','Sabuhi.jpg'),
(8,'Namiq Nəcəfov','Layihə meneceri','Project manager','n.nacafov@ecohub.az',NULL),
(9,'Şəbnəm Gülüşova','Layihə koordinatoru','Project coordinator','s.gulushova@ecohub.az','sebnem.jpeg'),

CREATE TABLE `partners` (
    partner_id INT PRIMARY KEY AUTO_INCREMENT,
    partner_name VARCHAR(80) NOT NULL,
    partner_logo VARCHAR(50) NOT NULL
) ENGINE = InnoDB;

INSERT INTO `partners` (`partner_id`,`partner_name`,`partner_logo`) 
VALUES
(1,'ADA Fundation','ADA-fundation_logo.png'),
(2,'ADA Univeristy','ADA_logo.png'),
(3,'ADRA','ADRA_logo.svg'),
(4,'Bakcell','Bakcell_logo.png'),
(5,'Carlsberg','Carlsberg_logo.png'),
(6,'Coca-Cola','Coca-Cola_logo.png'),
(7,'ETSN','ETSN_logo.jpg'),
(8,'GSCS','GSCS_logo.jpg'),
(9,'Pasha Bank','Pashabank_logo.svg');

CREATE TABLE `projects` (
  project_id INT PRIMARY KEY AUTO_INCREMENT,
  project_title_az VARCHAR(80) NOT NULL,
  project_title_en VARCHAR(80) NOT NULL,
  project_content_az MEDIUMTEXT NOT NULL,
  project_content_en MEDIUMTEXT NOT NULL,
  project_images JSON NOT NULL
) ENGINE = InnoDB;

INSERT INTO `projects` 
(`project_id`,`project_title_az`,`project_title_en`,`project_content_az`,`project_content_en`,`project_images`) 
VALUES 
(1,'Tullantısız Dünya','World Without Waste','Qlobal proqram ölkəmizdə plastik tullantıların ətraf mühitə mənfi\n  təsirinin azaldılması məqsədilə \"Coca-Cola\" şirkəti tərəfindən\n  icra olunur.\n  <br />\n  \"Coca-Cola\" Fondunun dəstəyi, Ecohub Ekoloji platformasının icraçı\n  partnyorluğunun, Ekologiya və Təbii Sərvətlər Nazirliyinin və\n  yerli icra hakimiyyətlərinin əməkdaşlığı ilə həyata keçirilən\n  layihə növbəti mərhələlərdə Gəncə, Sumqayıt, Mingəçevir, Qəbələ və\n  Quba şəhərlərində təşkil ediləcək.','The global program is implemented by the \"Coca-Cola\" company in order to reduce the negative impact of plastic waste on the environment in our country.\n  The project, implemented with the support of \"Coca-Cola\" Foundation, the cooperation of Ecohub, the Ministry of Ecology and Natural Resources and local executive authorities, will be organized in the next stages in the cities of Ganja, Sumgayit, Mingachevir, Gabala and Guba. ','[\"3M3A5429.jpg\", \"3M3A5288.jpg\", \"3M3A5335.jpg\", \"B47A8768.jpg\", \"AF6O8296.jpg\"]'),
(2,'Təmiz Sumqayıt','Clean Sumgayit','\"Təmiz Sumqayıt\" layihəsi Ecohub Ekoloji platformasının icraçı partnyorluğu və Coca-Colanın birgə təşkilatçılığı ilə Sumqayıt şəhərində tullantıların ətraf mühitə təsirinin azaldılmasına xidmət edir.\n  Həmçinin, \"Təmiz Sumqayıt\" layihəsini Ekologiya və Təbii Sərvətlər Nazirliyi, Sumqayıt şəhər İcra Hakimiyyəti, Carlsberg, Unilever kimi şirkətlərin Azərbaycan nümayəndəlikləri dəstəkləyir.','The \"Clean Sumgayit\" project, jointly organized by the ASAN Volunteers Organization and Coca-Cola, serves to reduce the impact of waste on the environment in the city of Sumgayit.\n  Also, the \"Clean Sumgayit\" project was supported by the Ministry of Ecology and Natural Resources, the Sumgayit City Executive Authority, Carlsberg, Unilever, and other companies in Azerbaijan. supports representations. ','[\"3M3A0320.jpg\", \"3M3A0350.jpg\", \"3M3A0357.jpg\", \"B47A2083.jpg\", \"B47A2198.jpg\"]'),
(3,'Xəzəri Qoruyaq','Let\'s Protect Khazar','Son 30 il müddətində dünyanın 100-dən çox ölkəsində qeyd olunan Beynəlxalq Sahilyanı Təmizlik Günü Yer kürəsində su hövzələri sahillərinin tullantılardan təmizlənməsinə yönələn ən irimiqyaslı könüllü hərəkatıdır. Azərbaycan da bu beynəlxalq \n  ekoloji aksiyada “Xəzəri qoruyaq” şüarı ilə artıq 10 ildir iştirak edir və ildən-ilə aksiyanın miqyası genişlənir. Azərbaycanda son 10 il ərzində keçirilən analoji aksiya çərçivəsində Xəzər dənizinin çimərliklərinin 45 hektaradək ərazisi \n  təxminən 40 ton məişət tullantısından təmizlənib. Təmizlənən ərazilərdən toplanan tullantılar qeydə alınaraq məlumatlar “Ocean Concervancy” beynəlxalq təşkilatına göndərilir. Həmin məlumatlar isə öz növbəsində dünya su hövzələrinin təmizlənməsi \n  haqqında ölkələr üzrə beynəlxalq hesabatlarda əks olunur.<br />\n  Bu il “Xəzəri qoruyaq!” Beynəlxalq Sahilyanı Təmizlik Kampaniyası “Coca-Cola”, “Carlsberg Azerbaijan”, “PAŞA Bank” və “Bakcell” şirkətlərinin tərəfdaşlığı, Ekologiya və Təbii Sərvətlər Nazirliyinin, ASAN Xidmətin, \"ASAN Könüllüləri\" Təşkilatının \n  dəstəyi və “EcoHub” ekoloji platformasının icraçı tərəfdaşlığı ilə həyata keçirilib. Aksiyasının təşkilatçılığında Regional İnkişaf İctimai Birliyi, Azərbaycan Könüllü Təşkilatları İttifaqı, “Təmiz Şəhər” Açıq Səhmdar Cəmiyyəti, Azərbaycan Dövlət \n  Reklam Agentliyi, ADA Universiteti Fondu, Global Shapers Shamakhi Hub, ABŞ-ın Azərbaycandakı Səfirliyi, ABŞ Təhsilli Azərbaycan Məzunları İctimai Birliyi, Azərbaycan Jurnalistlər Şəbəkəsi İctimai Birliyi, Bakı Nəqliyyat Agentliyi, Bakı Beynəlxalq \n  Dəniz Ticarət Limanı, LU-MUN Holding və “Baker Hughes” şirkəti iştirak edib. ','International Coastal Cleanup Day, which has been celebrated in more than 100 countries for the past 30 years, is the largest voluntary movement in the world aimed at cleaning the shores of water bodies from waste. \n  Azerbaijan has been participating in this international environmental action with the slogan \"Let\'s protect the Caspian\" for 10 years, and the scale of the action is expanding every year. Within the framework of a \n  similar action held in Azerbaijan over the last 10 years, the area of the Caspian Sea beaches up to 45 hectares was cleaned of about 40 tons of household waste. The waste collected from the cleaned areas is registered \n  and the data is sent to the international organization \"Ocean Conservancy\". Those data, in turn, are reflected in the international reports on the cleaning of the world\'s water bodies. <br />\n  This year \"Let\'s protect the Caspian!\" The International Coastal Cleanup Campaign is a partnership of \"Coca-Cola\", \"Carlsberg Azerbaijan\", \"PASHA Bank\" and \"Bakcell\" companies, with the support of the Ministry of Ecology \n  and Natural Resources, ASAN Service, \"ASAN Volunteers\" Organization and the executive partnership of the ecological platform \"EcoHub\". was conducted. The action is organized by Regional Development Public Union, Azerbaijan \n  Voluntary Organizations Union, \"Tamiz Shehar\" Open Joint Stock Company, Azerbaijan State Advertising Agency, ADA University Foundation, Global Shapers Shamakhi Hub, US Embassy in Azerbaijan, US Educated Azerbaijan Alumni \n  Public Union, Azerbaijan Journalists\' Network Public Union, Baku Transport Agency, Baku International Sea Trade Port, LU-MUN Holding and \"Baker Hughes\" company participated.',NULL),
(4,'Xəzəri Qoruyaq 2020','Let\'s Protect Khazar 2020','\"Xəzəri Qoruyaq 2020\" Layihəsindən','From the \"Let\'s Protect the Khazar 2020\" Project','[\"xq20-1.jpg\", \"xq20-2.jpg\", \"xq20-3.jpg\", \"xq20-4.jpg\", \"xq20-5.jpg\", \"xq20-6.jpg\"]'),
(5,'Xəzəri Qoruyaq 2021','Let\'s Protect Khazar 2021','\"Xəzəri Qoruyaq 2021\" Layihəsindən','From the \"Let\'s Protect the Khazar 2021\" Project','[\"_VSL2260.jpg\", \"_VSL2386.jpg\", \"_VSL2550.jpg\", \"_VSL2591.jpg\", \"_VSL2624.jpg\"]'),
(6,'Xəzəri Qoruyaq 2022','Let\'s Protect Khazar 2022','Əvvəlki illərdən fərqli olaraq aksiya Azərbaycanın Xəzər dənizi sərhəddi boyu Xaçmaz, Şabran, Siyəzən, Sumqayıt, Neftçala, Lənkəran, Astara regionlarında ümumilikdə 8 hektardan çox ərazi tullantılardan təmizlənmişdir. Regionlardan ümumilikdə 1030 kg tullantı toplanımışdır (~400 kg plastik). Toplanan plastiklər yerli İcra Hakimiyyəti orqanları tərəfindən qəbul edilib. Regionlarda aksiyalar Rayon İcra Hakimiyyətinin nümayəndələri, Ekologiya və Təbii Sərvətlər Nazirliyinin yerli regional idarələrinin, Regional İnkişaf İctimai Birliyinin könüllülərinin, Gənclərin İnkişaf və Karyera Mərkəzinin nümayəndəliklərinin və eləcə də Eko könüllülərinin və ASAN könüllülərinin iştirakı ilə təşkil olunub. Ümumilikdə 455 könüllü iştirak edib. Regionların göstəriciləri aşağıda qeyd olunmuşdur.\n  • Xaçmaz 150 kg, 75 könüllü\n  • Şabran 100 kg, 60 könüllü\n  • Siyəzən 130 kg, 60 könüllü\n  • Neftçala 150 kg, 70 könüllü\n  • Sumqayit 200 kg, 85 nəfər\n  • Astara 180 kg 55 nəfər\n  • Lənkəran 120 kg 50 nəfər','In contrast to previous years, the action along the Caspian Sea border of Azerbaijan in the regions of Khachmaz, Shabran, Siyazan, Sumgait, Neftchala, Lankaran, Astara, in total, cleared more than 8 hectares of waste. A total of 1030 kg of waste (~400 kg of plastic) was collected from the regions. The collected plastics were accepted by the local executive authorities. Actions in the regions were organized with the participation of representatives of the Regional Executive Power, local regional offices of the Ministry of Ecology and Natural Resources, volunteers of the Regional Development Public Union, representatives of the Youth Development and Career Center, as well as Eco volunteers and ASAN volunteers. A total of 455 volunteers participated. The indicators of the regions are mentioned below.\n  • Khachmaz 150 kg, 75 volunteers\n  • Shabran 100 kg, 60 volunteers \n  • Siyazan 130 kg, 60 volunteers\n  • Neftchala 150 kg, 70 volunteers \n  • Sumgayit 200 kg, 85 people\n  • Astara 180 kg 55 people\n  • Lankaran 120 kg 50 people','[\"xq22-1.jpg\", \"xq22-2.jpg\", \"xq22-3.jpg\", \"xq22-4.jpg\", \"xq22-5.jpg\"]'),
(7,'HORECA','HORECA','Layihə Coca-Cola şirkəti, Ecohub Ekoloji platformasının icraçı\n  partnyorluğu, Ekologiya və Təbii Sərvətlər Nazirliyinin birgə\n  əməkdaşlığı ilə Bakının bir sıra hotel, restoran və kafelərində\n  plastik tullantıları toplamaq üçün \"Tullantısız Dünya\" proqramının\n  tərkibində icra olunur. <br />\n  Layihənin icra olunmasında məqsəd istifadə olunmuş plastikləri\n  təkrar emala yönləndirmək və bu xammalın ətraf mühitə təsirini\n  azaltmaqdır.','The project is implemented as part of the \"World Without Waste\" \n  program to collect plastic waste in a number of hotels, restaurants \n  and cafes of Baku with the joint cooperation of the Coca-Cola Company, \n  Ecohub ecological organization, and the Ministry of Ecology and Natural \n  Resources.\n  The goal of the project is to redirect used plastics to recycling and \n  reduce the impact of these raw materials on the environment. ','[\"IMG_9247.jpg\", \"IMG_9275.jpg\", \"IMG_9283.jpg\", \"IMG_9401.jpg\", \"IMG_9422.jpg\"]'),
(8,'Sıfır tullantı','Zero Waste','\"Sıfır tullantı\" layihəsi \"Coca-Cola\" və \"Carlsberg\n  Azerbaijan\"-nın  (Baltika Sıfır) dəstəyi, Ekologiya və Təbii\n  Sərvətlər Nazirliyinin tərəfdaşlığı və \"EcoHub\" ekoloji\n  platformasının icraçı partnyorluğu ilə icra olunur.<br />\n  \"Sıfır tullantı\" (Zero Waste) layihəsinin məqsədi yay mövsümündə\n  Bakı və Abşeron ərazisində çimərliklərdə fəaliyyət göstərən\n  müəssisələrdə, kafe və restoranlarda istifadə olunan qablaşdırma\n  tullantılarının miqdarını azaltmaq və onların toplanaraq təkrar\n  emala cəlb olunmasını təmin etməkdir.','\"Zero waste\" project is implemented with the executive partnership \n  of \"Coca-Cola\" and \"Carlsberg Azerbaijan\" (Baltika Sifyr) project, \n  Union of Ecology and Natural Resources and ecological platform \"EcoHub\".\n  The goal of the \"Zero waste\" project is to reduce the amount of packaging \n  waste used in the beach activities, cafes and restaurants in the Baku and \n  Absheron area during the summer season and ensure that they are collected \n  and recycled.','[\"3M3A7915.jpg\", \"3M3A7939.jpg\", \"3M3A8023.jpg\", \"3M3A7954.jpg\", \"3M3A8056.jpg\"]'),
(9,'Ağacəkmə aksiyası','Tree planting','29 oktyabr 2022 -ci il tarixində EcoHub Ekoloji Platformasının\n  təşkilatçılığı, “Japan Tobacco International” (JTI) şirkətinin\n  Azərbaycandakı nümayəndəliyinin dəstəyi və “Tabaterra” Qapalı\n  Səhmdar Cəmiyyətinin tərəfdaşlığı ilə Sumqayıt Sənaye Parkında\n  yerləşən Tabaterra zavodunun ərazisində ağacəkmə aksiyası\n  keçirilib. Aksiyada tərəfdaşların əməkdaşları ilə birlikdə 200-dən\n  çox ağacları əkilib, abadlıq işləri aparılaraq ağacların dibi\n  yumşaldılıb, yaşıllıqlara aqrotexniki qulluq göstərilib. Aksiyanın\n  keçirilməsində məqsəd ağac əkməklə ekoloji tarazlığın bərpasına,\n  ətraf mühitin qorunmasına kömək etmək, atmosferi oksigenlə\n  zənginləşdirmək, ictimaiyyətin diqqətini yaşıllıqların qorunmasına\n  yönəltməkdir. EcoHub-ın bu cür ekoloji aksiyaları mütəmadi olaraq\n  təşkil etməkdə məqsədi ətraf mühitin mühafizəsinin vacibliyini\n  insanların, xüsusilə, gənc nəslin və müxtəlif şirkətlərin ekoloji\n  problemlərə qarşı mübarizədə aktivliyini artırılmasıdır.','On October 29, 2022, a tree-planting action was held on the territory \n  of the Tabaterra plant located in the Sumgayit Industrial Park with the \n  organization of the EcoHub Ecological Platform, the support of the \n  representative office of \"Japan Tobacco International\" (JTI) in Azerbaijan \n  and the partnership of \"Tabaterra\" Closed Joint Stock Company. In the \n  campaign, more than 200 trees were planted together with the employees \n  of the partners, landscaping works were carried out, the bottom of the \n  trees was softened, and agrotechnical care was provided to the greenery. \n  The purpose of the campaign is to help restore the ecological balance by \n  planting trees, protect the environment, enrich the atmosphere with oxygen, \n  and direct the public\'s attention to the protection of greenery. The purpose \n  of EcoHub in regularly organizing such environmental actions is to increase \n  the importance of environmental protection to people, especially the young \n  generation, and to increase the activity of various companies in the fight \n  against environmental problems.','[\"agacekme.mp4\"]'),
(10,'Tullantısız Azərbaycan','Wasteless Azerbaijan','\"Tullantısız Azərbaycan\" tədbiri keçirilib Coca-Cola şirkəti, Ekologiya və Təbii \n  Sərvətlər Nazirliyi və “EcoHub” qeyri-kommersiya platformasının birgə əməkdaşlığı \n  ilə \"Tullantısız Azərbaycan\" adlı tədbir keçirilib. Tədbirdə Coca-Cola şirkətinin \n  Tullantısız Dünya proqramı çərçivəsində Azərbaycanda plastik tullantıların toplanması \n  və təkrar emalını təşviq edən layihələrin nəticələri təqdim edilib, bu istiqamətdə \n  görüləcək yeni təşəbbüslər haqqında məlumat verilib və ekoloji layihələrə fəal dəstək \n  olan şirkətlər mükafatlandırılıb. Təqdimat çərçivəsində Coca-Cola şirkətinin Avrasiya \n  ölkələri üzrə İctimaiyyətlə Əlaqələr Direktoru Elşad Fərzəliyev çıxış edərək şirkətin \n  qlobal \"Tullantısız Dünya\" strategiyasına uyğun olaraq Azərbaycanda icra olunan layihələr \n  barədə məlumat verib və bu layihələrin icrasında səmərəli əməkdaşlıq edən tərəfdaşlara öz \n  təşəkkürünü bildirib: “Coca-Cola Azərbaycanda tullantıların azaldılması və qabaqcıl \n  beynəlxalq təcrübəyə əsasən idarə olunmasını özünün sosial-ekoloji siyasətinin \n  prioritetlərindən biri kimi görür.','\"Wasteless Azerbaijan\" event was held The event called \"Wasteless Azerbaijan\" \n  was held with the joint cooperation of the Coca-Cola Company, the Ministry of \n  Ecology and Natural Resources and the non-commercial platform \"EcoHub\". At the \n  event, the results of projects promoting the collection and recycling of \n  plastic waste in Azerbaijan were presented within the framework of the \n  Coca-Cola Company\'s Waste-Free World program, information was provided on \n  new initiatives to be taken in this direction, and companies that actively \n  support environmental projects were awarded. Within the framework of the \n  presentation, Elshad Farzaliyev, Public Relations Director of the Coca-Cola \n  Company for Eurasian countries, made a speech and informed about the projects \n  implemented in Azerbaijan in accordance with the company\'s global \"World \n  Without Waste\" strategy, and expressed his gratitude to the partners who \n  cooperated effectively in the implementation of these projects: \"Coca-Cola \n  considers waste reduction and waste management in Azerbaijan as one of the \n  priorities of its social and environmental policy. ',NULL);


CREATE TABLE `galery` (
  galery_id INT PRIMARY KEY AUTO_INCREMENT,
  galery_images VARCHAR(40) NOT NULL
) ENGINE = InnoDB;

INSERT INTO `galery` 
(`galery_id`,`galery_images`) 
VALUES 
(1,'3M3A0298.jpg'),
(2,'3M3A0320.jpg'),
(3,'3M3A0350.jpg'),
(4,'3M3A0357.jpg'),
(5,'3M3A5135.jpg'),
(6,'3M3A5144.jpg'),
(7,'3M3A5146.jpg'),
(8,'3M3A5288.jpg'),
(9,'3M3A5332.jpg'),
(10,'3M3A5335.jpg'),
(11,'3M3A5425.jpg'),
(12,'3M3A5429.jpg'),
(13,'3M3A5435.jpg'),
(14,'3M3A5436.jpg'),
(15,'3M3A5440.jpg'),
(16,'3M3A5447.jpg'),
(17,'3M3A5490.jpg'),
(18,'3M3A5505.jpg'),
(19,'AF6O8103.jpg'),
(20,'AF6O8116.jpg'),
(21,'AF6O8168.jpg'),
(22,'AF6O8172.jpg'),
(23,'AF6O8296.jpg'),
(24,'AF6O8305.jpg'),
(25,'AF6O8320.jpg'),
(26,'AF6O8380.jpg'),
(27,'AF6O8466.jpg'),
(28,'AF6O8479.jpg'),
(29,'AF6O8483.jpg'),
(30,'AF6O8489.jpg'),
(31,'AF6O8518.jpg'),
(32,'AF6O8544.jpg'),
(33,'AF6O8546.jpg'),
(34,'AF6O8554.jpg'),
(35,'AF6O8561.jpg'),
(36,'AF6O8566.jpg'),
(37,'B47A2083.jpg'),
(38,'B47A2096.jpg'),
(39,'B47A2198.jpg'),
(40,'B47A2246.jpg'),
(41,'B47A6240.jpg'),
(42,'B47A6295.jpg'),
(43,'B47A6312.jpg'),
(44,'B47A6368.jpg'),
(45,'B47A6382.jpg'),
(46,'B47A6397.jpg'),
(47,'B47A8691.jpg'),
(48,'B47A8695.jpg'),
(49,'B47A8720.jpg'),
(50,'B47A8732.jpg'),
(51,'B47A8768.jpg'),
(52,'_VSL2260.jpg'),
(53,'_VSL2386.jpg'),
(54,'_VSL2550.jpg'),
(55,'_VSL2591.jpg'),
(56,'_VSL2624.jpg'),
(57,'_VSL2724.jpg');


CREATE TABLE `ecoCalendar` (
  cal_id INT PRIMARY KEY AUTO_INCREMENT,
  cal_images VARCHAR(40) NOT NULL
) ENGINE = InnoDB;

INSERT INTO `ecoCalendar` 
(`cal_id`,`cal_images`) 
VALUES 
(1,'entry.png'),
(2,'jan.png'),
(3,'feb.png'),
(4,'mar.png'),
(5,'apr.png'),
(6,'may.png'),
(7,'jun.png'),
(8,'jul.png'),
(9,'aug.png'),
(10,'sen.png'),
(11,'oct.png'),
(12,'nov.png'),
(13,'dec.png');


CREATE TABLE `didYouKnow` (
  dyk_id INT PRIMARY KEY AUTO_INCREMENT,
  dyl_images VARCHAR(40) NOT NULL
) ENGINE = InnoDB;

INSERT INTO `didYouKnow` 
(`dyk_id`,`dyk_images`) 
VALUES 
(1,'insta_post_1.jpg'),
(2,'insta_post_10.jpg'),
(3,'insta_post_11.jpg'),
(4,'insta_post_12.jpg'),
(5,'insta_post_13.jpg'),
(6,'insta_post_14.jpg'),
(7,'insta_post_15.jpg'),
(8,'insta_post_16.jpg'),
(9,'insta_post_17.jpg'),
(10,'insta_post_18.jpg'),
(11,'insta_post_19.jpg'),
(12,'insta_post_2.jpg'),
(13,'insta_post_20.jpg'),
(14,'insta_post_21.jpg'),
(15,'insta_post_22.jpg'),
(16,'insta_post_23.jpg'),
(17,'insta_post_25.jpg'),
(18,'insta_post_26.jpg'),
(19,'insta_post_27.jpg'),
(20,'insta_post_28.jpg'),
(21,'insta_post_29.jpg'),
(22,'insta_post_3.jpg'),
(23,'insta_post_30.jpg'),
(24,'insta_post_31.jpg'),
(25,'insta_post_32.jpg'),
(26,'insta_post_33.jpg'),
(27,'insta_post_34.jpg'),
(28,'insta_post_35.jpg'),
(29,'insta_post_36.jpg'),
(30,'insta_post_37.jpg'),
(31,'insta_post_38.jpg'),
(32,'insta_post_39.jpg'),
(33,'insta_post_4.jpg'),
(34,'insta_post_40.jpg'),
(35,'insta_post_41.jpg'),
(36,'insta_post_42.jpg'),
(37,'insta_post_43.jpg'),
(38,'insta_post_44.jpg'),
(39,'insta_post_45.jpg'),
(40,'insta_post_46.jpg'),
(41,'insta_post_47.jpg'),
(42,'insta_post_48.jpg'),
(43,'insta_post_5.jpg'),
(44,'insta_post_6.jpg'),
(45,'insta_post_7.jpg'),
(46,'insta_post_8.jpg'),
(47,'insta_post_9.jpg');

CREATE TABLE `contact` (
  contact_id INT PRIMARY KEY AUTO_INCREMENT,
  contact_address VARCHAR(40) NOT NULL,
  contact_email VARCHAR(30) NOT NULL,
  contact_numer VARCHAR(15) NOT NULL
) ENGINE = InnoDB;

insert into contact
(contact_address, contact_email, contact_number)
value
('Abşeron rayonu, Novxanı kəndi, AZ0119', 'info@ecohub.az', '055-994-45-55');

CREATE TABLE `footer` (
  logo_id INT PRIMARY KEY AUTO_INCREMENT,
  logo_name VARCHAR(20) NOT NULL,
  logo_image VARCHAR(20) NOT NULL,
  logo_url VARCHAR(50) NOT NULL
) ENGINE = InnoDB;

insert into footer
(logo_name, logo_image, logo_url)
values
('facebook','facebook.png','https://www.facebook.com/EcoHub.az/'),
('youtube','youtube.png','https://www.youtube.com/@ecohub5716'),
('instagram','instagram.png','https://www.instagram.com/ecohub.az/'),
('twitter','twitter.png','/'),
('linkedin','linkedin.png','/');

CREATE TABLE `indexSlider` (
  slide_id INT PRIMARY KEY AUTO_INCREMENT,
  slide_text VARCHAR(30) NOT NULL,
  slide_paragraph VARCHAR(30) NOT NULL,
  slide_image VARCHAR(30) NOT NULL
) ENGINE = InnoDB;

insert into indexSlider
(slide_text, slide_paragraph, slide_image, slide_main)
values
('Daha yaxşı ətraf mühit','Daha yaxşı gələcək','ecosample2.png', true),
('Ecohub Ekoloji platformasının icraçı partnyorluğu','"Tullantısız Dünya" proqramı Qəbələdə!','B47A8768.jpg',false),
('Ecohub Ekoloji platformasının icraçı partnyorluğu','proqramı üzrə fəaliyyətə başlayıblar!','AF6O8116.jpg',false),
('Ecohub Ekoloji platformasının icraçı partnyorluğu','ekoloji sorğular keçirirlər!','B47A2096.jpg',false);