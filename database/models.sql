ALTER DATABASE ecohub CHARACTER SET utf8 COLLATE utf8_unicode_ci;

CREATE TABLE `index` 
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

CREATE TABLE `contact` (
  contact_id INT PRIMARY KEY AUTO_INCREMENT,
  contact_address VARCHAR(40) NOT NULL,
  contact_email VARCHAR(30) NOT NULL,
  contact_numer VARCHAR(15) NOT NULL
) ENGINE = InnoDB;

CREATE TABLE `footer` (
  logo_id INT PRIMARY KEY AUTO_INCREMENT,
  logo_name VARCHAR(20) NOT NULL,
  logo_image VARCHAR(20) NOT NULL,
  logo_url VARCHAR(50) NOT NULL
) ENGINE = InnoDB;

CREATE TABLE `indexSlider` (
  slide_id INT PRIMARY KEY AUTO_INCREMENT,
  slide_text VARCHAR(30) NOT NULL,
  slide_paragraph VARCHAR(30) NOT NULL,
  slide_image VARCHAR(30) NOT NULL
) ENGINE = InnoDB;
