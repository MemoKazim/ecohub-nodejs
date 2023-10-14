CREATE DATABASE EcohubDB;
USE EcohubDB;

CREATE TABLE `home`
(
    project_id INT PRIMARY KEY AUTO_INCREMENT,
    project_title_az VARCHAR(150) NOT NULL, 
    project_title_en VARCHAR(150) NOT NULL, 
    project_image_name VARCHAR(50) NOT NULL
) ENGINE = InnoDB;

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

CREATE TABLE `employees` 
(
    employee_id INT PRIMARY KEY AUTO_INCREMENT,
    employee_name VARCHAR(40), 
    employee_job_az VARCHAR(30) NOT NULL, 
    employee_job_en VARCHAR(30) NOT NULL, 
    employee_email VARCHAR(50) NOT NULL, 
    employee_image VARCHAR(50)
) ENGINE = InnoDB;

CREATE TABLE `partners` (
    partner_id INT PRIMARY KEY AUTO_INCREMENT,
    partner_name VARCHAR(80) NOT NULL,
    partner_logo VARCHAR(50) NOT NULL
) ENGINE = InnoDB;

CREATE TABLE `projects` (
  project_id INT PRIMARY KEY AUTO_INCREMENT,
  project_title_az VARCHAR(80) NOT NULL,
  project_title_en VARCHAR(80) NOT NULL,
  project_content_az MEDIUMTEXT NOT NULL,
  project_content_en MEDIUMTEXT NOT NULL,
  project_images JSON NOT NULL
) ENGINE = InnoDB;

CREATE TABLE `contact` (
  contact_id INT PRIMARY KEY AUTO_INCREMENT,
  contact_address VARCHAR(40) NOT NULL,
  contact_email VARCHAR(30) NOT NULL,
  contact_number VARCHAR(15) NOT NULL
) ENGINE = InnoDB;

CREATE TABLE `footer` (
  logo_id INT PRIMARY KEY AUTO_INCREMENT,
  logo_name VARCHAR(20) NOT NULL,
  logo_image VARCHAR(20) NOT NULL,
  logo_url VARCHAR(50) NOT NULL
) ENGINE = InnoDB;


CREATE TABLE `indexSlider` (
  slide_id INT PRIMARY KEY AUTO_INCREMENT,
  slide_text_az VARCHAR(80) NOT NULL,
  slide_paragraph_az VARCHAR(80) NOT NULL,
  slide_text_en VARCHAR(80) NOT NULL,
  slide_paragraph_en VARCHAR(80) NOT NULL,
  slide_image VARCHAR(30) NOT NULL,
  slide_main BOOLEAN NOT NULL
) ENGINE = InnoDB;

CREATE TABLE `galery` (
  galery_id INT PRIMARY KEY AUTO_INCREMENT,
  galery_images VARCHAR(40) NOT NULL
) ENGINE = InnoDB;

CREATE TABLE `ecoCalendar` (
  cal_id INT PRIMARY KEY AUTO_INCREMENT,
  cal_images VARCHAR(40) NOT NULL
) ENGINE = InnoDB;

CREATE TABLE `didYouKnow` (
  dyk_id INT PRIMARY KEY AUTO_INCREMENT,
  dyl_images VARCHAR(40) NOT NULL
) ENGINE = InnoDB;

INSERT INTO `home`
(`project_id`,`project_title_az`,`project_title_en`,`project_image_name`) 
VALUES 
(1,`Tullantısız dünya`,`Tullantısız dünya`,`3M3A5429.jpg`);

INSERT INTO news
(`new_id`,`new_title_az`,`new_title_en`,`new_date`,`new_images`,`new_cover`,`new_content_az`,`new_content_en`) 
VALUES 
(1,`Ecohub Ekoloji platformasının icraçı partnyorluğunun keçirdiyi layihə Qəbələdə!`,`The project of Ecohub environmental executive partnership is in Gabala!`,`2022-06-07`,`[\"B47A8768.jpg\"]`,`B47A8768.jpg`,`Qəbələ şəhərində \"Tullantısız Dünya\" proqramı çərçivəsində icra olunacaq \"Təmiz Qəbələ\" layihəsinə start verilib. \"Coca-Cola\" Fondunun dəstəyi, Ecohub Ekoloji platformasının icraçı partnyorluğu, Ekologiya və Təbii Sərvətlər Nazirliyinin və yerli icra hakimiyyətlərinin əməkdaşlığı ilə həyata keçirilən layihə növbəti mərhələlərdə Sumqayıt, Mingəçevir və Quba şəhərlərində təşkil ediləcək. \"Tullantısız Dünya\" proqramının icra olunmasında məqsəd plastik tullantıları toplayıb təkrar emala yönəltməkdir. 2022-ci ilin sonuna qədər proqram çərçivəsində 300 ton plastikin toplanılaraq təkrar emala cəlb edilməsi planlaşdırılır. Həmin regionlarda yığımı həyata keçirmək üçün \"ASAN xidmət\" mərkəzlərinə irihəcmli tullantı qutuları yerləşdirilib. Bununla yanaşı, yığım prosesinə qeyd olunan regionlarda təhsil müəssisələri və müxtəlif obyektlərin də cəlb olunması planlaşdırılır. Eyni zamanda, layihə çərçivəsində yığım işi ilə yanaşı, əhali arasında təbliğat prosesləri və ekoloji rəy sorğuları da keçiriləcək. Layihə üzrə sorğu və maarifləndirmə işinin məqsədi əhali arasında təkrar emalla və tullantıların çeşidlənməsi ilə bağlı məlumatlılığın artırılması, eləcə də onların çeşidləmə ilə bağlı təkliflərini toplamaq və həmin dinamikanı ilbəil izləməkdir. Pilot olaraq plastiklərin toplanmasını ehtiva edən bu layihə gələcəkdə digər qablaşdırma tullantılarının da toplanmasını və təkrar emala göndərilməsini planlaşdırır. Qəbələ \"ASAN xidmət\" mərkəzində baş tutan tədbirdə könüllülərə \"Ətraf mühitin mühafizəsi və təkrar emal mövzusunda\" seminar təşkil olunub. Seminarda gənclər təlimçi-ekoloq tərəfindən ekoloji istiqamətdə və plastiklərin ətraf mühitə mənfi təsirləri, onların aradan qaldırılması ilə bağlı məlumatlandırılıblar. `,`In the city of Gabala, the \"Clean Gabala\" project, which will be implemented within the framework of the \"World Without Waste\" program, has been launched. The project implemented with the support of \"Coca-Cola\" Foundation, Ecohub ecological executive partnership, the cooperation of the Ministry of Ecology and Natural Resources and local executive authorities will be organized in the next stages in the cities of Sumgait, Mingachevir and Guba. The goal of the \"Waste-Free World\" program is to collect and recycle plastic waste. By the end of 2022, it is planned to collect and recycle 300 tons of plastic within the program. In order to carry out the collection in those regions, large waste bins have been placed in \"ASAN service\" centers. In addition, it is planned to involve educational institutions and various objects in the mentioned regions in the collection process. At the same time, in addition to collection work within the project, publicity processes and environmental opinion polls will be held among the population. The aim of the survey and education work on the project is to increase the awareness among the population about recycling and waste sorting, as well as to collect their suggestions about sorting and to monitor those dynamics from year to year. This project, which includes the collection of plastics as a pilot, plans to collect and recycle other packaging waste in the future. A seminar on \"Environmental protection and recycling\" was organized for volunteers at the event held at \"ASAN service\" center in Gabala. At the seminar, the young people were informed by the trainer-ecologist in the ecological direction and about the negative effects of plastics on the environment and their elimination.`);

INSERT INTO employees
(`employee_id`,`employee_name`,`employee_job_az`,`employee_job_en`,`employee_email`,`employee_image`) 
VALUES 
(1,`Tükəz Hüseynova`,`Direktor`,`Director`,`t.huseynova@ecohub.az`,`Tukez.jpg`);

INSERT INTO partners (`partner_id`,`partner_name`,`partner_logo`)
VALUES
(1,`ADA Fundation`,`ADA-fundation_logo.png`);

INSERT INTO projects
(`project_id`,`project_title_az`,`project_title_en`,`project_content_az`,`project_content_en`,`project_images`) 
VALUES 
(1,`Tullantısız Dünya`,`World Without Waste`,`Qlobal proqram ölkəmizdə plastik tullantıların ətraf mühitə mənfi\n  təsirinin azaldılması məqsədilə \"Coca-Cola\" şirkəti tərəfindən\n  icra olunur.\n  <br />\n  "Coca-Cola" Fondunun dəstəyi, Ecohub Ekoloji platformasının icraçı\n  partnyorluğunun, Ekologiya və Təbii Sərvətlər Nazirliyinin və\n  yerli icra hakimiyyətlərinin əməkdaşlığı ilə həyata keçirilən\n  layihə növbəti mərhələlərdə Gəncə, Sumqayıt, Mingəçevir, Qəbələ və\n  Quba şəhərlərində təşkil ediləcək.`,`The global program is implemented by the "Coca-Cola" company in order to reduce the negative impact of plastic waste on the environment in our country.\n  The project, implemented with the support of "Coca-Cola" Foundation, the cooperation of Ecohub, the Ministry of Ecology and Natural Resources and local executive authorities, will be organized in the next stages in the cities of Ganja, Sumgayit, Mingachevir, Gabala and Guba. `,`["3M3A5429.jpg", "3M3A5288.jpg", "3M3A5335.jpg", "B47A8768.jpg", "AF6O8296.jpg"]`),

INSERT INTO galery
(`galery_id`,`galery_images`) 
VALUES 
(1,`3M3A0298.jpg`);

INSERT INTO ecoCalendar
(`cal_id`,`cal_images`) 
VALUES 
(1,`entry.png`);

INSERT INTO didYouKnow
(`dyk_id`,`dyk_images`) 
VALUES 
(1,`insta_post_1.jpg`);

INSERT INTO contact
(contact_address, contact_email, contact_number)
VALUE
(`Abşeron rayonu, Novxanı kəndi, AZ0119`, `info@ecohub.az`, `055-994-45-55`);

INSERT INTO footer
(logo_name, logo_image, logo_url)
VALUES
(`facebook`,`facebook.png`,`https://www.facebook.com/EcoHub.az/`);

INSERT INTO indexSlider
(slide_text, slide_paragraph, slide_image, slide_main)
VALUES
(`Daha yaxşı ətraf mühit`,`Daha yaxşı gələcək`,`ecosample2.png`, true);