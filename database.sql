CREATE DATABASE buyabox;
CREATE TABLE IF NOT EXISTS `boards` (
  `id` int(5) NOT NULL AUTO_INCREMENT,
  `description` varchar(255) NOT NULL,
  `owner` varchar(255) NOT NULL,
  `name` varchar(255) NOT NULL,
  `teams` varchar(255) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=1;
CREATE TABLE IF NOT EXISTS `boxes` (
  `id` int(5) NOT NULL AUTO_INCREMENT,
  `board_id` int(5) NOT NULL,
  `value` int(5) NOT NULL,
  `bought` boolean NOT NULL default 0,
  `buyer` varchar(255),
  `message` varchar(255),
  `team` varchar(255),
  PRIMARY KEY (`id`),
  FOREIGN KEY (board_id) REFERENCES boards(id) ON DELETE CASCADE
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=1;