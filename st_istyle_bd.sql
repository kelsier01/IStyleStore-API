-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 26-06-2024 a las 03:39:57
-- Versión del servidor: 10.4.32-MariaDB
-- Versión de PHP: 8.0.30

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `st_istyle_bd`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `clientes`
--

CREATE TABLE `clientes` (
  `id` int(10) UNSIGNED NOT NULL,
  `nombre` varchar(45) DEFAULT NULL,
  `run` varchar(45) DEFAULT NULL,
  `direccion` varchar(45) DEFAULT NULL,
  `ciudad` varchar(45) DEFAULT NULL,
  `mail` varchar(45) DEFAULT NULL,
  `fono` int(10) UNSIGNED NOT NULL,
  `estado` int(11) DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Volcado de datos para la tabla `clientes`
--

INSERT INTO `clientes` (`id`, `nombre`, `run`, `direccion`, `ciudad`, `mail`, `fono`, `estado`, `created_at`, `updated_at`) VALUES
(1, 'Michael Aguirre ', '16467901-2', NULL, NULL, 'michael.aguirre.saavedra@gmail.com', 59292849, 1, NULL, NULL),
(2, 'Juan Perez Perez', '11111111-1', NULL, NULL, 'jperez@gmail.com', 57262105, 1, NULL, NULL),
(3, 'Nathaly Morales', '17115357-3', NULL, NULL, 'trimissa@gmail.com', 57262333, 1, NULL, NULL),
(5, 'Bastian Fuentes', '21122933-0', NULL, NULL, 'bastian.fuentes.gaete@gmail.com', 935281542, 1, NULL, NULL),
(6, 'Rodrigo', '222222-2', NULL, NULL, 'muzapip@mailinator.com', 4294967295, 1, NULL, NULL),
(7, 'Eu quis temporibus p', '33333333-3', NULL, NULL, 'ciraqiwuj@mailinator.com', 1, 1, NULL, NULL),
(10, 'Quis lorem soluta an', '77777777-7', NULL, NULL, 'kopaposix@mailinator.com', 876876876, 1, NULL, NULL),
(12, 'Mauro', '444444444-4', NULL, NULL, 'bastian.fuentes.gaete@gmail.com', 59292849, 1, NULL, NULL),
(14, 'Jose', '3333333333-3', NULL, NULL, 'b.fuentes38@alumnos.santotomas.cl', 59292849, 1, NULL, NULL),
(16, 'prueba1', '888888888', NULL, NULL, 'bastian.fuentes.gaete@gmail.com', 987987987, 1, NULL, NULL),
(17, 'Sofia', '2222228888', NULL, NULL, 'b.fuentes38@alumnos.santotomas.cl', 935281542, 1, NULL, NULL),
(18, 'prueba2', 'Reiciendis ut fuga ', NULL, NULL, 'nogude@mailinator.com', 4294967295, 0, NULL, NULL),
(19, 'prueba3', '333333333333333', NULL, NULL, 'bastian.naitsab2002@gmail.com', 59292849, 1, NULL, NULL),
(20, 'prueba4', '3333333333333333', NULL, NULL, 'bastian.naitsab2002@gmail.com', 59292849, 1, NULL, NULL),
(21, 'Vero aute voluptatem', '768767868768', NULL, NULL, 'gususygil@mailinator.com', 576576576, 0, NULL, NULL),
(22, 'Mauro', '999999999999', NULL, NULL, 'm14gs4@gmail.com', 935281542, 1, NULL, NULL),
(23, 'Quia culpa labore e', 'Dolore nesciunt per', NULL, NULL, 'wihim@mailinator.com', 0, 0, NULL, NULL),
(24, 'Qui in enim voluptat', 'Corporis debitis ut ', NULL, NULL, 'cifecex@mailinator.com', 0, 1, NULL, NULL),
(25, 'test5', '212333333', NULL, NULL, 'b.fuentes38@alumnos.santotomas.cl', 312313212, 1, NULL, NULL),
(26, 'Duis corporis in min', 'Voluptatibus et temp', NULL, NULL, 'tokixu@mailinator.com', 0, 0, NULL, NULL),
(27, 'jkhkjhkj', 'hkjhkjh', NULL, NULL, 'jkhkjh', 0, 1, NULL, NULL),
(28, 'test7', '78687687', NULL, NULL, 'jkhkjh', 0, 1, NULL, NULL),
(29, 'test8', '786876878', NULL, NULL, 'jkhkjh', 0, 0, NULL, NULL),
(30, 'Ad ad nulla harum au', 'Perferendis architec', NULL, NULL, 'kypikuh@mailinator.com', 0, 1, NULL, NULL),
(31, 'test8', '6786876876876', NULL, NULL, 'kypikuh@mailinator.com', 4294967295, 1, NULL, NULL),
(32, 'test9', '67868768768768768', NULL, NULL, 'kypikuh@mailinator.com', 4294967295, 1, NULL, NULL),
(33, 'Ipsum sapiente et q', 'Ratione voluptas qui', NULL, NULL, 'cihavolyw@mailinator.com', 0, 0, NULL, NULL),
(34, 'Ipsum animi libero ', 'Enim et dolorum porr', NULL, NULL, 'funyro@mailinator.com', 0, 1, NULL, NULL),
(35, 'Eius do totam ea eni', 'Magni veniam exerci', NULL, NULL, 'xukejuca@mailinator.com', 0, 0, NULL, NULL),
(36, 'Michael Aguirre ', '90809809', NULL, NULL, 'kypikuh@mailinator.com', 4294967295, 1, NULL, NULL),
(37, 'prueba10', '7987987987', NULL, NULL, 'kypikuh@mailinator.com', 8797899, 1, NULL, NULL),
(38, 'pruebadefinitiva', '809809809', NULL, NULL, 'm14gs4@gmail.com', 4294967295, 1, NULL, NULL),
(39, 'pruebafinal', '89798798798', NULL, NULL, '97897987', 9879879, 1, NULL, NULL),
(40, 'Minima recusandae Q', 'Vel adipisci aliquip', NULL, NULL, 'gutihal@mailinator.com', 0, 0, NULL, NULL),
(41, 'Michael Aguirre ', '12312331231', NULL, NULL, 'michael.aguirre.saavedra@gmail.com', 7878876, 1, NULL, NULL),
(42, 'Sofiatest4', '8799999', NULL, NULL, 'kjhkjhkjh', 89798798, 1, NULL, NULL),
(43, 'Michael Aguirre ', '6757657657', NULL, NULL, 'kypikuh@mailinator.com', 4294967295, 1, NULL, NULL),
(44, 'PRUEBAFINAL', '657657657', NULL, NULL, 'kypikuh@mailinator.com', 4294967295, 1, NULL, NULL),
(45, 'lewis', '68768768-6', NULL, NULL, 'hgjhgjhgjhgjhg', 4294967295, 1, NULL, NULL),
(46, 'Francisco', '68768768-9', NULL, NULL, 'hgjhgjhgjhgjhg', 4294967295, 1, NULL, NULL),
(47, 'Bryan', '68768768-4', NULL, NULL, 'hgjhgjhgjhgjhg', 4294967295, 1, NULL, NULL),
(48, 'test10', '677657756-7', NULL, NULL, 'm14gs4@gmail.com', 88888888, 1, NULL, NULL),
(49, 'test1777', '7576576-8', NULL, NULL, 'm14gs4@gmail.com', 88888888, 1, NULL, NULL),
(50, 'dylan', '6876876876', NULL, NULL, 'ghfhgfhgf', 7687687, 1, NULL, NULL),
(51, 'Alan', '6868768768', NULL, NULL, 'kypikuh@mailinator.com', 4294967295, 1, NULL, NULL),
(52, 'Sergio', '687687687-6', NULL, NULL, 'kypikuh@mailinator.com', 4294967295, 1, NULL, NULL),
(53, 'Carlos', '65765765-0', NULL, NULL, 'b.fuentes38@alumnos.santotomas.cl', 687687, 1, NULL, NULL),
(54, 'Marcela', '767865760-9', NULL, NULL, 'bastian.fuentes.gaete@gmail.com', 4294967295, 1, NULL, NULL);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `dispositivos`
--

CREATE TABLE `dispositivos` (
  `id` int(11) NOT NULL,
  `nombre` varchar(45) NOT NULL,
  `modelo` int(70) NOT NULL,
  `estado` int(250) NOT NULL DEFAULT 1,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `dispositivos`
--

INSERT INTO `dispositivos` (`id`, `nombre`, `modelo`, `estado`, `created_at`, `updated_at`) VALUES
(2, 'iPhone 5', 1, 0, NULL, NULL),
(3, 'iPhone 5c', 1, 1, NULL, NULL),
(4, 'iPhone 5s', 1, 1, NULL, NULL),
(5, 'iPhone SE', 1, 1, NULL, NULL),
(6, 'iPhone 6', 1, 1, NULL, NULL),
(7, 'iPhone 6 plus', 1, 1, NULL, NULL),
(8, 'iPhone 6s', 1, 1, NULL, NULL),
(9, 'iPhone 6s Plus', 1, 1, NULL, NULL),
(10, 'iPhone 7', 1, 1, NULL, NULL),
(11, 'iPhone 7 Plus', 1, 1, NULL, '2020-11-18 13:10:17'),
(12, 'iPhone 8', 1, 1, NULL, NULL),
(13, 'iPhone 8 Plus', 1, 1, NULL, '2020-11-18 13:10:24'),
(14, 'iPhone X', 1, 1, NULL, NULL),
(15, 'iPhone XS', 1, 1, NULL, NULL),
(16, 'iPhone XR', 1, 1, NULL, NULL),
(17, 'iPhone XS Max', 1, 1, NULL, NULL),
(18, 'iPhone 11', 1, 1, NULL, NULL),
(19, 'Macbook', 2, 1, NULL, NULL),
(20, 'Macbook Pro', 2, 1, NULL, NULL),
(21, 'Macbook Pro Retina', 2, 1, NULL, NULL),
(22, 'Macbook Pro TouchBar', 2, 1, NULL, NULL),
(23, 'Macbook Air', 2, 1, NULL, NULL),
(24, 'Macbook Air Retina', 2, 1, NULL, NULL),
(25, 'iMac 21\"', 2, 1, NULL, NULL),
(26, 'iMac 27\"', 2, 1, NULL, NULL),
(27, 'iMac Pro', 2, 1, NULL, NULL),
(28, 'Mac Mini', 2, 1, NULL, NULL),
(29, 'iPad', 3, 1, NULL, NULL),
(30, 'iPad Air', 3, 1, NULL, NULL),
(31, 'iPad Pro', 3, 1, NULL, NULL),
(32, 'iPad Mini', 3, 1, NULL, NULL),
(44, 'iPhone 11 Pro', 1, 1, '2020-10-21 13:32:27', '2020-11-18 13:11:36'),
(45, 'iPhone 11 Pro Max', 1, 1, '2020-10-21 13:32:27', '2020-11-18 13:11:45'),
(46, 'Magsafe2', 2, 1, '2020-11-11 15:43:28', '2020-11-11 15:43:28'),
(47, 'Magsafe 1', 14, 1, '2020-11-18 14:03:18', '2020-11-18 14:03:18'),
(48, '1', 12, 1, '2020-11-19 13:17:10', '2020-11-19 13:17:10'),
(49, 'magsafe 1', 13, 1, '2020-11-23 17:02:34', '2020-11-23 17:02:34'),
(50, 'Iphone SE 2020', 1, 1, '2020-11-25 15:39:56', '2020-11-25 15:39:56'),
(51, 'iMac', 15, 1, '2020-12-04 16:20:27', '2020-12-04 16:20:27'),
(52, 'iMac Pro', 15, 1, '2020-12-04 16:20:27', '2020-12-04 16:20:27'),
(53, 's1', 16, 1, '2020-12-09 16:22:21', '2020-12-09 16:22:21'),
(54, 's2', 16, 1, '2020-12-09 16:22:21', '2020-12-09 16:22:21'),
(55, 's3', 16, 1, '2020-12-09 16:22:21', '2020-12-09 16:22:21'),
(56, 's4', 16, 1, '2020-12-09 16:22:21', '2020-12-09 16:22:21'),
(57, 's5', 16, 1, '2020-12-09 16:22:21', '2020-12-09 16:22:21'),
(58, 's6', 16, 1, '2020-12-09 16:22:21', '2020-12-09 16:22:21'),
(59, 'se', 16, 1, '2020-12-09 16:22:21', '2020-12-09 16:22:21'),
(60, '8', 17, 1, '2020-12-29 16:51:43', '2020-12-29 16:51:43'),
(61, '9', 17, 1, '2020-12-29 16:51:43', '2020-12-29 16:51:43'),
(62, 'generico', 18, 1, '2021-01-05 16:59:23', '2021-01-05 16:59:23'),
(63, 'Huawei GT2', 16, 1, '2021-01-26 16:03:46', '2021-01-26 16:03:46'),
(64, 'Parlante Marley', 19, 1, '2021-01-28 14:49:48', '2021-01-28 14:49:48'),
(65, 'iPhone 12 Pro', 1, 1, '2021-03-01 17:05:19', '2021-03-01 17:05:19'),
(66, 'JBL', 19, 1, '2021-03-23 14:45:29', '2021-03-23 14:45:29'),
(67, 'Hp', 18, 1, '2021-04-14 16:26:32', '2021-04-14 16:26:32'),
(68, 'Ipod', 20, 1, '2021-04-20 21:46:15', '2021-04-20 21:46:15'),
(69, 'iPhone 12 ProMax', 1, 1, '2021-06-09 16:20:56', '2021-06-09 16:20:56'),
(70, 'Asus', 21, 1, '2021-06-17 16:42:26', '2021-06-17 16:42:26'),
(71, 'Lenovo', 21, 1, '2021-06-25 18:06:49', '2021-06-25 18:06:49'),
(72, 'iPad 6', 3, 1, '2021-07-06 19:23:58', '2021-07-06 19:23:58'),
(73, 'Macbook Pro 17', 2, 1, '2021-07-07 19:06:29', '2021-07-07 19:06:29'),
(74, 'no', 3, 1, '2021-07-08 18:41:31', '2021-07-08 18:41:31'),
(75, 'iPad 5', 3, 1, '2021-07-20 20:28:43', '2021-07-20 20:28:43'),
(76, 'samsung', 22, 1, '2021-08-19 16:39:44', '2021-08-19 16:39:44'),
(77, 'Motorola', 22, 1, '2021-09-01 14:14:01', '2021-09-01 14:14:01'),
(78, 'iPhone 12', 1, 1, '2021-09-27 19:27:01', '2021-09-27 19:27:01'),
(79, 'samsung', 23, 1, '2021-10-19 16:56:56', '2021-10-19 16:56:56'),
(80, 'Samsung', 24, 1, '2021-10-29 16:11:03', '2021-10-29 16:11:03'),
(81, 'Acer', 21, 1, '2021-11-04 14:28:29', '2021-11-04 14:28:29'),
(82, 'Huawei', 22, 1, '2021-11-11 14:31:09', '2021-11-11 14:31:09'),
(83, 'HP', 21, 1, '2021-11-18 17:16:56', '2021-11-18 17:16:56'),
(84, 'Dell', 21, 1, '2021-11-25 14:04:21', '2021-11-25 14:04:21'),
(85, 'Mac Mini', 18, 1, '2022-01-07 16:50:09', '2022-01-07 16:50:09'),
(86, 'iPhone 13 Pro', 1, 1, '2022-04-14 16:10:59', '2022-04-14 16:10:59'),
(87, 'Nokia', 22, 1, '2022-04-26 15:07:20', '2022-04-26 15:07:20'),
(88, 'Apple', 27, 1, '2022-09-30 15:20:08', '2022-09-30 15:20:08'),
(89, '14 Pro Max', 1, 1, '2022-10-13 15:46:54', '2022-10-13 15:46:54'),
(90, 'IPhone 12 Mini', 1, 1, '2022-10-26 14:07:20', '2022-10-26 14:07:20'),
(91, 'iPhone 13', 1, 1, '2022-12-09 17:37:39', '2022-12-09 17:37:39'),
(92, 'iPhone 14Pro Max', 1, 1, '2022-12-23 18:14:59', '2022-12-23 18:14:59'),
(93, 'Cats61', 28, 1, '2022-12-28 15:34:03', '2022-12-28 15:34:03'),
(94, 'Samsung', 21, 1, '2022-12-28 15:52:12', '2022-12-28 15:52:12'),
(95, 'iPhone 13Pro Max', 1, 1, '2023-01-05 15:38:21', '2023-01-05 15:38:21'),
(96, 'LaCie', 29, 1, '2023-01-30 19:24:23', '2023-01-30 19:24:23'),
(97, 'A10S', 30, 1, '2023-02-02 13:32:00', '2023-02-02 13:32:00'),
(98, 'S23 Ultra', 30, 1, '2023-02-17 15:22:04', '2023-02-17 15:22:04'),
(99, 'S7 41mm', 16, 1, '2023-02-17 16:38:58', '2023-02-17 16:38:58'),
(100, 'A71', 30, 1, '2023-02-24 19:19:31', '2023-02-24 19:19:31'),
(101, 'AirPods', 23, 1, '2023-06-01 14:02:00', '2023-06-01 14:02:00'),
(102, 'A04', 30, 1, '2023-06-12 17:51:31', '2023-06-12 17:51:31'),
(103, 'Garmin', 16, 1, '2023-06-22 20:39:04', '2023-06-22 20:39:04'),
(104, 'JLAB', 23, 1, '2023-06-29 18:16:45', '2023-06-29 18:16:45'),
(105, 'Apple', 31, 1, '2023-06-30 15:30:08', '2023-06-30 15:30:08'),
(106, 'iPhone 14', 1, 1, '2023-06-30 17:40:48', '2023-06-30 17:40:48'),
(107, 'POCO', 22, 1, '2023-07-17 17:00:32', '2023-07-17 17:00:32'),
(108, 'Redmi', 32, 1, '2023-07-18 18:35:20', '2023-07-18 18:35:20'),
(109, 'Bose', 19, 1, '2023-07-27 15:43:11', '2023-07-27 15:43:11'),
(110, 'One Plus', 22, 1, '2023-09-28 20:37:15', '2023-09-28 20:37:15'),
(111, 'iPhone 15', 1, 1, '2023-10-19 20:53:32', '2023-10-19 20:53:32'),
(112, 'gamer', 33, 1, '2023-10-19 20:54:28', '2023-10-19 20:54:28'),
(113, 'S22', 30, 1, '2023-11-13 14:29:41', '2023-11-13 14:29:41'),
(114, 'Generoico', 19, 1, '2024-01-24 15:35:50', '2024-01-24 15:35:50'),
(115, 'Genérico', 19, 1, '2024-01-24 15:36:08', '2024-01-24 15:36:08'),
(116, 'Xiaomi', 22, 1, '2024-02-20 14:40:19', '2024-02-20 14:40:19'),
(117, 'Mac Mini', 25, 1, '2024-02-26 19:46:56', '2024-02-26 19:46:56'),
(118, 'Nothing Phone', 22, 1, '2024-02-29 20:02:55', '2024-02-29 20:02:55'),
(119, 'iPhone 15 Pro', 1, 1, '2024-03-04 18:11:55', '2024-03-04 18:11:55'),
(120, 'iPhone 15 Pro Max', 1, 1, '2024-03-05 17:26:19', '2024-03-05 17:26:19'),
(121, 'Lenovo', 24, 1, '2024-03-06 19:50:53', '2024-03-06 19:50:53'),
(122, 'iPhone 13mini', 1, 1, '2024-03-11 13:56:41', '2024-03-11 13:56:41'),
(123, 'Iphone 16', 1, 1, NULL, NULL),
(124, '22', 41, 1, NULL, NULL),
(125, '50', 41, 1, NULL, NULL),
(126, 'popotipo', 42, 1, NULL, NULL),
(127, 'Danniels', 44, 1, NULL, NULL),
(137, 'xiaomi redmi 12', 45, 1, NULL, NULL),
(138, 'Honor Magic Pro', 48, 0, NULL, NULL);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `equipos`
--

CREATE TABLE `equipos` (
  `id` int(11) NOT NULL,
  `nombre` varchar(45) NOT NULL,
  `estado` int(11) DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `equipos`
--

INSERT INTO `equipos` (`id`, `nombre`, `estado`, `created_at`, `updated_at`) VALUES
(1, 'iPhone', 1, '2020-02-03 09:00:00', '2020-02-03 09:00:00'),
(2, 'Macbook', 0, '2020-02-03 09:00:00', '2020-02-03 09:00:00'),
(3, 'iPad', 0, '2020-02-03 09:00:00', '2020-02-03 09:00:00'),
(12, 'Magsafe 2', 0, '2020-11-11 15:43:12', '2020-11-11 15:43:12'),
(13, 'MagSafe 1', 0, '2020-11-18 14:02:56', '2020-11-18 14:02:56'),
(14, 'MagSafe 1', 0, '2020-11-18 14:03:18', '2020-11-18 14:03:18'),
(15, 'iMac', 0, '2020-12-04 16:20:27', '2020-12-04 16:20:27'),
(16, 'watch', 0, '2020-12-09 16:22:21', '2020-12-09 16:22:21'),
(17, 'GoPRO', 0, '2020-12-29 16:51:43', '2020-12-29 16:51:43'),
(18, 'PC', 0, '2021-01-05 16:59:23', '2021-01-05 16:59:23'),
(19, 'Parlante', 1, '2021-01-28 14:49:48', '2021-01-28 14:49:48'),
(20, 'Ipod', 1, '2021-04-20 21:46:15', '2021-04-20 21:46:15'),
(21, 'Notebook', 1, '2021-06-17 16:42:26', '2021-06-17 16:42:26'),
(22, 'Android', 1, '2021-08-19 16:39:44', '2021-08-19 16:39:44'),
(23, 'audifonos', 1, '2021-10-19 16:56:56', '2021-10-19 16:56:56'),
(24, 'Tablet', 1, '2021-10-29 16:11:03', '2021-10-29 16:11:03'),
(25, 'Mac mini', 1, '2022-01-07 16:47:34', '2022-01-07 16:47:34'),
(26, 'MagicMouse', 1, '2022-08-17 20:02:07', '2022-08-17 20:02:07'),
(27, 'Apple TV', 1, '2022-09-30 15:20:08', '2022-09-30 15:20:08'),
(28, 'Cat', 1, '2022-12-28 15:34:03', '2022-12-28 15:34:03'),
(29, 'Disco Duro', 1, '2023-01-30 19:24:23', '2023-01-30 19:24:23'),
(30, 'samsung', 1, '2023-02-02 13:32:00', '2023-02-02 13:32:00'),
(31, 'Magic Keyboard', 1, '2023-03-01 20:28:20', '2023-03-01 20:28:20'),
(32, 'Xiaomi', 1, '2023-07-18 18:35:20', '2023-07-18 18:35:20'),
(33, 'silla', 1, '2023-10-19 20:54:28', '2023-10-19 20:54:28'),
(34, 'iphone 16', 1, '2024-02-08 16:41:18', '2024-02-08 16:41:18'),
(35, 'iphone 16', 1, '2024-02-08 16:41:18', '2024-02-08 16:41:18'),
(36, 'Generico', 1, '2024-03-11 13:44:39', '2024-03-11 13:44:39'),
(37, 'jacinto', 1, NULL, NULL),
(38, 'Mamani', 1, NULL, NULL),
(39, 'cocout', 1, NULL, NULL),
(40, 'oeoeoe', 1, NULL, NULL),
(41, 'RRRR', 1, NULL, NULL),
(42, 'popo', 1, NULL, NULL),
(43, 'paco', 1, NULL, NULL),
(44, 'JAck', 1, NULL, NULL),
(45, 'xiaomi 12', 0, '2024-06-14 19:38:39', '2024-06-14 19:38:39'),
(48, 'Honor Magic', 1, NULL, NULL),
(49, 'Huawei', 1, NULL, NULL);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `equipo_has__preguntas`
--

CREATE TABLE `equipo_has__preguntas` (
  `id` int(11) NOT NULL,
  `id_equipo` int(11) NOT NULL,
  `id_pregunta` int(11) NOT NULL,
  `estado` int(11) DEFAULT NULL,
  `habilitado` int(250) NOT NULL,
  `updated_at` timestamp NOT NULL DEFAULT current_timestamp(),
  `created_at` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `equipo_has__preguntas`
--

INSERT INTO `equipo_has__preguntas` (`id`, `id_equipo`, `id_pregunta`, `estado`, `habilitado`, `updated_at`, `created_at`) VALUES
(59, 1, 3, NULL, 0, '2020-09-11 04:11:13', '2020-09-11 06:44:25'),
(60, 1, 5, NULL, 0, '2020-09-11 04:11:25', '2020-09-11 06:44:31'),
(61, 1, 7, NULL, 0, '2020-09-11 04:11:32', '2020-09-11 06:44:36'),
(62, 1, 9, NULL, 0, '2020-09-11 04:11:34', '2020-09-11 06:44:41'),
(63, 1, 11, NULL, 0, '2020-09-11 04:11:41', '2020-09-11 06:44:45'),
(65, 1, 18, NULL, 0, '2020-09-11 04:12:23', '2020-09-11 06:44:55'),
(66, 1, 17, NULL, 0, '2020-09-11 04:12:26', '2020-09-11 06:49:24'),
(67, 1, 16, NULL, 0, '2020-09-11 04:12:27', '2020-09-11 06:49:21'),
(68, 1, 15, NULL, 0, '2020-09-11 04:12:28', '2020-09-11 06:49:18'),
(69, 1, 14, NULL, 0, '2020-09-11 04:12:30', '2020-09-11 06:49:29'),
(70, 1, 13, NULL, 0, '2020-09-11 04:12:30', '2020-09-11 06:49:32'),
(71, 1, 12, NULL, 0, '2020-09-11 04:12:31', '2020-09-11 06:49:38'),
(72, 1, 10, NULL, 0, '2020-09-11 04:12:36', '2020-09-11 06:49:50'),
(73, 1, 8, NULL, 0, '2020-09-11 04:12:37', '2020-09-11 06:49:53'),
(78, 1, 3, NULL, 0, '2020-09-11 06:58:55', '2020-09-11 06:58:55'),
(83, 2, 3, NULL, 0, '2020-09-13 04:28:06', '2020-09-13 04:28:06'),
(84, 3, 3, NULL, 0, '2020-09-13 04:28:07', '2020-09-13 04:28:07'),
(86, 2, 5, NULL, 0, '2020-09-13 04:28:19', '2020-09-13 04:28:19'),
(87, 3, 5, NULL, 0, '2020-09-13 04:28:21', '2020-09-13 04:28:21'),
(89, 2, 7, NULL, 0, '2020-09-13 04:28:59', '2020-09-13 04:28:59'),
(90, 3, 7, NULL, 0, '2020-09-13 04:29:02', '2020-09-13 04:29:02'),
(92, 2, 9, NULL, 0, '2020-09-13 04:29:13', '2020-09-13 04:29:13'),
(93, 3, 9, NULL, 0, '2020-09-13 04:29:14', '2020-09-13 04:29:14'),
(94, 2, 11, NULL, 0, '2020-09-13 04:29:21', '2020-09-13 04:29:21'),
(95, 3, 11, NULL, 0, '2020-09-13 04:29:22', '2020-09-13 04:29:22'),
(96, 3, 12, NULL, 0, '2020-09-13 04:29:25', '2020-09-13 04:29:25'),
(97, 3, 13, NULL, 0, '2020-09-13 04:29:32', '2020-09-13 04:29:32'),
(98, 3, 15, NULL, 0, '2020-09-13 04:29:41', '2020-09-13 04:29:41'),
(99, 2, 16, NULL, 0, '2020-09-13 04:29:45', '2020-09-13 04:29:45'),
(100, 3, 16, NULL, 0, '2020-09-13 04:29:46', '2020-09-13 04:29:46'),
(101, 2, 17, NULL, 0, '2020-09-13 04:29:53', '2020-09-13 04:29:53'),
(102, 3, 17, NULL, 0, '2020-09-13 04:29:55', '2020-09-13 04:29:55'),
(103, 3, 18, NULL, 0, '2020-09-13 04:30:03', '2020-09-13 04:30:03'),
(114, 2, 20, NULL, 0, '2020-09-13 04:38:42', '2020-09-13 04:38:42'),
(115, 2, 21, NULL, 0, '2020-09-13 04:38:43', '2020-09-13 04:38:43'),
(116, 2, 22, NULL, 0, '2020-09-13 04:38:45', '2020-09-13 04:38:45'),
(117, 2, 23, NULL, 0, '2020-09-13 04:38:47', '2020-09-13 04:38:47'),
(118, 2, 24, NULL, 0, '2020-09-13 04:38:49', '2020-09-13 04:38:49'),
(119, 2, 25, NULL, 0, '2020-09-13 04:38:50', '2020-09-13 04:38:50'),
(120, 2, 26, NULL, 0, '2020-09-13 04:38:52', '2020-09-13 04:38:52'),
(121, 2, 27, NULL, 0, '2020-09-13 04:38:53', '2020-09-13 04:38:53'),
(123, 2, 2, NULL, 0, '2020-09-14 01:23:52', '2020-09-15 16:45:05'),
(126, 2, 3, NULL, 0, '2020-09-14 03:26:59', '2020-09-14 03:26:59'),
(136, 2, 5, NULL, 0, '2020-09-14 05:50:58', '2020-09-14 05:50:58'),
(144, 1, 1, 2, 0, '2020-09-15 22:55:03', '2020-09-15 22:55:03'),
(147, 1, 3, 1, 0, '2020-09-15 23:43:12', '2020-09-15 23:43:12'),
(148, 1, 5, 1, 0, '2020-09-15 23:43:16', '2020-09-15 23:43:16'),
(150, 1, 7, 1, 0, '2020-09-15 23:43:25', '2020-09-15 23:43:25'),
(151, 1, 9, 1, 0, '2020-09-15 23:43:29', '2020-09-15 23:43:29'),
(152, 1, 11, 1, 0, '2020-09-15 23:43:33', '2020-09-15 23:43:33'),
(153, 1, 12, 1, 0, '2020-09-15 23:43:37', '2020-09-15 23:43:37'),
(154, 1, 13, 1, 0, '2020-09-15 23:43:45', '2020-09-15 23:43:45'),
(155, 1, 15, 1, 0, '2020-09-15 23:43:49', '2020-09-15 23:43:49'),
(156, 1, 17, 1, 0, '2020-09-15 23:43:58', '2020-09-15 23:43:58'),
(157, 1, 16, 1, 0, '2020-09-15 23:44:01', '2020-09-15 23:44:01'),
(158, 1, 18, 1, 0, '2020-09-15 23:44:07', '2020-09-15 23:44:07'),
(159, 1, 8, 1, 0, '2020-09-15 23:44:45', '2020-09-15 23:44:45'),
(160, 1, 4, 1, 0, '2020-09-15 23:45:02', '2020-09-15 23:45:02'),
(161, 1, 14, 1, 0, '2020-09-15 23:45:23', '2020-09-15 23:45:23'),
(162, 1, 10, 1, 0, '2020-09-15 23:46:35', '2020-09-15 23:46:35'),
(164, 1, 3, 2, 0, '2020-09-16 00:00:40', '2020-09-16 00:00:40'),
(165, 1, 4, 2, 0, '2020-09-16 00:00:47', '2020-09-16 00:00:47'),
(166, 1, 5, 2, 0, '2020-09-16 00:00:52', '2020-09-16 00:00:52'),
(168, 1, 1, 3, 1, '2020-09-16 00:01:24', '2024-06-21 19:45:17'),
(169, 1, 1, 1, 0, '2020-09-16 00:01:30', '2020-09-16 00:01:30'),
(170, 1, 2, 3, 0, '2020-09-16 00:01:38', '2020-09-16 00:01:38'),
(171, 1, 3, 3, 0, '2020-09-16 00:01:41', '2020-09-16 00:01:41'),
(172, 1, 4, 3, 0, '2020-09-16 00:01:44', '2020-09-16 00:01:44'),
(173, 1, 5, 3, 0, '2020-09-16 00:01:50', '2020-09-16 00:01:50'),
(174, 1, 6, 3, 0, '2020-09-16 00:01:58', '2020-09-16 00:01:58'),
(175, 1, 8, 3, 0, '2020-09-16 00:02:13', '2020-09-16 00:02:13'),
(176, 1, 9, 3, 0, '2020-09-16 00:02:18', '2020-09-16 00:02:18'),
(177, 1, 10, 3, 0, '2020-09-16 00:02:25', '2020-09-16 00:02:25'),
(178, 1, 11, 3, 0, '2020-09-16 00:02:31', '2020-09-16 00:02:31'),
(179, 1, 12, 3, 0, '2020-09-16 00:02:38', '2020-09-16 00:02:38'),
(180, 1, 18, 3, 0, '2020-09-16 00:02:44', '2020-09-16 00:02:44'),
(181, 2, 1, 1, 0, '2020-09-16 00:06:16', '2020-09-16 00:06:16'),
(182, 2, 2, 1, 0, '2020-09-16 00:06:24', '2020-09-16 00:06:24'),
(183, 2, 3, 1, 0, '2020-09-16 00:06:28', '2020-09-16 00:06:28'),
(188, 2, 20, NULL, 0, '2020-09-16 00:08:11', '2020-09-16 00:08:11'),
(189, 2, 20, 1, 0, '2020-09-16 00:08:13', '2020-09-16 00:08:13'),
(190, 2, 22, 1, 0, '2020-09-16 00:09:19', '2020-09-16 00:09:19'),
(191, 2, 24, NULL, 0, '2020-09-16 00:09:43', '2020-09-16 00:09:43'),
(192, 2, 24, 1, 0, '2020-09-16 00:09:45', '2020-09-16 00:09:45'),
(193, 2, 31, NULL, 0, '2020-09-16 00:10:31', '2020-09-16 00:10:31'),
(194, 2, 31, 1, 0, '2020-09-16 00:10:33', '2020-09-16 00:10:33'),
(195, 2, 30, 1, 0, '2020-09-16 00:10:45', '2020-09-16 00:10:45'),
(196, 2, 5, 1, 0, '2020-09-16 00:12:00', '2020-09-16 00:12:00'),
(197, 2, 21, 1, 0, '2020-09-16 00:13:46', '2020-09-16 00:13:46'),
(198, 2, 7, 1, 0, '2020-09-16 00:15:46', '2020-09-16 00:15:46'),
(199, 2, 8, NULL, 0, '2020-09-16 00:16:08', '2020-09-16 00:16:08'),
(200, 2, 8, 1, 0, '2020-09-16 00:16:10', '2020-09-16 00:16:10'),
(203, 3, 1, 1, 0, '2020-09-16 00:18:30', '2020-09-16 00:18:30'),
(204, 3, 1, NULL, 0, '2020-09-16 00:18:34', '2020-09-16 00:18:34'),
(205, 2, 1, 2, 0, '2020-09-16 00:19:05', '2020-09-16 00:19:05'),
(206, 2, 2, 2, 0, '2020-09-16 00:19:09', '2020-09-16 00:19:09'),
(207, 2, 3, 2, 0, '2020-09-16 00:19:12', '2020-09-16 00:19:12'),
(209, 2, 5, 2, 0, '2020-09-16 00:19:18', '2020-09-16 00:19:18'),
(210, 2, 6, 2, 0, '2020-09-16 00:19:22', '2020-09-16 00:19:22'),
(211, 2, 1, 3, 0, '2020-09-16 00:19:39', '2020-09-16 00:19:39'),
(212, 2, 2, 3, 0, '2020-09-16 00:19:41', '2020-09-16 00:19:41'),
(213, 2, 3, 3, 0, '2020-09-16 00:19:44', '2020-09-16 00:19:44'),
(214, 2, 5, 3, 0, '2020-09-16 00:19:47', '2020-09-16 00:19:47'),
(215, 2, 6, 3, 0, '2020-09-16 00:19:51', '2020-09-16 00:19:51'),
(217, 2, 20, 3, 0, '2020-09-16 00:20:58', '2020-09-16 00:20:58'),
(218, 2, 21, 3, 0, '2020-09-16 00:21:16', '2020-09-16 00:21:16'),
(219, 2, 22, 3, 0, '2020-09-16 00:21:39', '2020-09-16 00:21:39'),
(220, 2, 32, NULL, 0, '2020-09-16 00:23:07', '2020-09-16 00:23:07'),
(221, 2, 32, 1, 0, '2020-09-16 00:23:15', '2020-09-16 00:23:15'),
(222, 1, 18, NULL, 0, '2020-09-16 00:25:09', '2020-09-16 00:25:09'),
(224, 3, 1, 2, 0, '2020-09-16 00:27:10', '2020-09-16 00:27:10'),
(225, 3, 2, 2, 0, '2020-09-16 00:27:13', '2020-09-16 00:27:13'),
(226, 3, 3, 1, 0, '2020-09-16 00:27:16', '2020-09-16 00:27:16'),
(227, 3, 3, 2, 0, '2020-09-16 00:27:17', '2020-09-16 00:27:17'),
(230, 3, 5, 1, 0, '2020-09-16 00:27:25', '2020-09-16 00:27:25'),
(231, 3, 5, 2, 0, '2020-09-16 00:27:26', '2020-09-16 00:27:26'),
(234, 3, 1, 3, 0, '2020-09-16 00:27:36', '2020-09-16 00:27:36'),
(235, 3, 2, 3, 0, '2020-09-16 00:27:40', '2020-09-16 00:27:40'),
(236, 3, 3, 3, 0, '2020-09-16 00:27:42', '2020-09-16 00:27:42'),
(237, 3, 4, 3, 0, '2020-09-16 00:27:45', '2020-09-16 00:27:45'),
(238, 3, 5, 3, 0, '2020-09-16 00:27:53', '2020-09-16 00:27:53'),
(239, 3, 6, 3, 0, '2020-09-16 00:27:56', '2020-09-16 00:27:56'),
(240, 3, 8, 3, 0, '2020-09-16 00:28:24', '2020-09-16 00:28:24'),
(241, 3, 8, 1, 0, '2020-09-16 00:28:25', '2020-09-16 00:28:25'),
(242, 3, 9, 3, 0, '2020-09-16 00:28:37', '2020-09-16 00:28:37'),
(243, 3, 10, 3, 0, '2020-09-16 00:28:43', '2020-09-16 00:28:43'),
(244, 3, 10, NULL, 0, '2020-09-16 00:28:45', '2020-09-16 00:28:45'),
(245, 3, 11, 3, 0, '2020-09-16 00:28:52', '2020-09-16 00:28:52'),
(246, 3, 12, 3, 0, '2020-09-16 00:28:58', '2020-09-16 00:28:58'),
(247, 3, 18, 3, 0, '2020-09-16 00:29:10', '2020-09-16 00:29:10'),
(248, 3, 18, 1, 0, '2020-09-16 00:30:14', '2020-09-16 00:30:14'),
(249, 3, 17, 1, 0, '2020-09-16 00:30:21', '2020-09-16 00:30:21'),
(250, 3, 16, 1, 0, '2020-09-16 00:30:27', '2020-09-16 00:30:27'),
(251, 3, 15, 1, 0, '2020-09-16 00:30:34', '2020-09-16 00:30:34'),
(252, 3, 14, 1, 0, '2020-09-16 00:30:39', '2020-09-16 00:30:39'),
(253, 3, 14, NULL, 0, '2020-09-16 00:30:41', '2020-09-16 00:30:41'),
(254, 3, 13, 1, 0, '2020-09-16 00:30:45', '2020-09-16 00:30:45'),
(255, 3, 11, 1, 0, '2020-09-16 00:30:49', '2020-09-16 00:30:49'),
(256, 3, 10, 1, 0, '2020-09-16 00:30:56', '2020-09-16 00:30:56'),
(257, 3, 9, 1, 0, '2020-09-16 00:31:04', '2020-09-16 00:31:04'),
(258, 3, 12, 1, 0, '2020-09-16 00:32:14', '2020-09-16 00:32:14'),
(259, 3, 7, 1, 0, '2020-09-16 00:32:28', '2020-09-16 00:32:28'),
(260, 2, 18, NULL, 0, '2020-09-21 18:37:12', '2020-09-21 18:37:12'),
(261, 2, 20, NULL, 0, '2020-09-21 18:38:21', '2020-09-21 18:38:21'),
(262, 1, 2, 1, 0, '2020-09-30 19:41:12', '2020-09-30 19:41:12'),
(263, 1, 7, 2, 0, '2020-09-30 19:41:56', '2020-09-30 19:41:56'),
(264, 1, 7, 3, 0, '2020-09-30 19:42:01', '2020-09-30 19:42:01'),
(265, 1, 9, 2, 0, '2020-09-30 19:42:21', '2020-09-30 19:42:21'),
(266, 1, 11, 2, 0, '2020-09-30 19:42:45', '2020-09-30 19:42:45'),
(267, 1, 13, 2, 0, '2020-09-30 19:44:19', '2020-09-30 19:44:19'),
(268, 1, 13, 3, 1, '2020-09-30 19:44:20', '2024-06-21 19:41:23'),
(269, 1, 15, 3, 0, '2020-09-30 19:45:09', '2020-09-30 19:45:09'),
(270, 1, 16, 3, 0, '2020-09-30 19:45:16', '2020-09-30 19:45:16'),
(271, 1, 17, 3, 0, '2020-09-30 19:45:22', '2020-09-30 19:45:22'),
(272, 2, 4, 3, 0, '2020-09-30 19:46:45', '2020-09-30 19:46:45'),
(273, 1, 6, 1, 0, '2020-09-30 19:48:40', '2020-09-30 19:48:40'),
(274, 2, 8, 3, 0, '2020-09-30 19:49:17', '2020-09-30 19:49:17'),
(275, 3, 7, 3, 0, '2020-09-30 19:49:27', '2020-09-30 19:49:27'),
(276, 1, 33, 1, 0, '2020-10-01 18:54:39', '2020-10-01 18:54:39'),
(277, 1, 33, NULL, 0, '2020-10-01 18:54:47', '2020-10-01 18:54:47'),
(278, 2, 9, 1, 0, '2021-06-02 19:11:54', '2021-06-02 19:11:54'),
(279, 2, 9, 2, 0, '2021-06-02 19:11:55', '2021-06-02 19:11:55'),
(280, 2, 9, 3, 0, '2021-06-02 19:11:55', '2021-06-02 19:11:55'),
(281, 3, 9, 2, 0, '2021-06-02 19:13:24', '2021-06-02 19:13:24'),
(282, 15, 9, NULL, 0, '2021-06-02 19:13:35', '2021-06-02 19:13:35'),
(283, 15, 9, 1, 0, '2021-06-02 19:13:39', '2021-06-02 19:13:39'),
(284, 15, 9, 2, 0, '2021-06-02 19:13:39', '2021-06-02 19:13:39'),
(285, 15, 9, 3, 0, '2021-06-02 19:13:40', '2021-06-02 19:13:40'),
(286, 15, 1, NULL, 0, '2021-10-08 13:22:26', '2021-10-08 13:22:26'),
(287, 16, 1, NULL, 0, '2021-10-08 13:22:28', '2021-10-08 13:22:28'),
(288, 18, 1, NULL, 0, '2021-10-08 13:22:29', '2021-10-08 13:22:29'),
(289, 21, 1, NULL, 0, '2021-10-08 13:22:31', '2021-10-08 13:22:31'),
(294, 13, 1, 1, 0, '2024-06-21 15:30:46', '2024-06-21 15:30:46'),
(295, 15, 1, 1, 0, '2024-06-21 20:06:20', '2024-06-21 20:07:58'),
(296, 15, 1, 3, 0, '2024-06-25 18:46:16', '2024-06-25 18:46:16'),
(297, 17, 1, 3, 0, '2024-06-25 18:47:10', '2024-06-25 18:47:10');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `estados_ordenes`
--

CREATE TABLE `estados_ordenes` (
  `id` int(10) NOT NULL,
  `nombre_estado` varchar(45) DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Volcado de datos para la tabla `estados_ordenes`
--

INSERT INTO `estados_ordenes` (`id`, `nombre_estado`, `created_at`, `updated_at`) VALUES
(1, 'INGRESADA', '2020-02-04 09:00:00', '2020-02-04 09:00:00'),
(2, 'EN REVISIÓN', NULL, NULL),
(3, 'PARA RETIRO', NULL, NULL),
(4, 'GARANTÍA', NULL, NULL),
(5, 'ENTREGADO', NULL, NULL);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `estado_equipos`
--

CREATE TABLE `estado_equipos` (
  `id` int(11) NOT NULL,
  `nombre` varchar(45) NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp(),
  `updated_at` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `estado_equipos`
--

INSERT INTO `estado_equipos` (`id`, `nombre`, `created_at`, `updated_at`) VALUES
(1, 'Prendido', '2020-09-11 00:39:47', '2020-09-11 00:39:47'),
(2, 'Apagado', '2020-09-11 00:39:47', '2020-09-11 00:39:47'),
(3, 'Bloqueado', '2020-09-11 00:39:58', '2020-09-11 00:39:58');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `formadepago`
--

CREATE TABLE `formadepago` (
  `id` int(11) NOT NULL,
  `nombre` varchar(45) NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_general_ci;

--
-- Volcado de datos para la tabla `formadepago`
--

INSERT INTO `formadepago` (`id`, `nombre`, `created_at`) VALUES
(1, 'Efectivo', '2020-02-14 01:38:35'),
(2, 'Debito', '2020-02-14 01:38:35'),
(3, 'Credito', '2020-02-14 01:38:44');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `garantias`
--

CREATE TABLE `garantias` (
  `id` int(11) NOT NULL,
  `fecha` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp(),
  `orden_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `garantias`
--

INSERT INTO `garantias` (`id`, `fecha`, `orden_id`) VALUES
(3, '2024-05-17 00:00:00', 1),
(4, '2024-05-17 00:00:00', 1),
(5, '2024-05-20 00:00:00', 1);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `ordenes`
--

CREATE TABLE `ordenes` (
  `id` int(10) UNSIGNED NOT NULL,
  `fecha_entrega` date DEFAULT NULL,
  `tecnico` varchar(45) DEFAULT NULL,
  `cliente_id` int(10) UNSIGNED DEFAULT NULL,
  `fecha_salida` date DEFAULT NULL,
  `imei` bigint(100) DEFAULT NULL,
  `codigo` varchar(255) DEFAULT NULL,
  `metodoPago` varchar(10) DEFAULT NULL,
  `id_equipo` int(11) NOT NULL,
  `id_dispositivo` int(11) NOT NULL,
  `estado_dispositivo` int(1) NOT NULL,
  `observacion` varchar(500) DEFAULT NULL,
  `estado` varchar(45) NOT NULL,
  `total` int(11) NOT NULL DEFAULT 0,
  `iva` int(11) NOT NULL DEFAULT 0,
  `descuento` int(11) NOT NULL DEFAULT 0,
  `subtotal` int(11) NOT NULL DEFAULT 0,
  `id_ultima_garantia` int(2) DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT current_timestamp(),
  `updated_at` timestamp NULL DEFAULT current_timestamp() ON UPDATE current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Volcado de datos para la tabla `ordenes`
--

INSERT INTO `ordenes` (`id`, `fecha_entrega`, `tecnico`, `cliente_id`, `fecha_salida`, `imei`, `codigo`, `metodoPago`, `id_equipo`, `id_dispositivo`, `estado_dispositivo`, `observacion`, `estado`, `total`, `iva`, `descuento`, `subtotal`, `id_ultima_garantia`, `created_at`, `updated_at`) VALUES
(1, '2024-05-20', 'Michael Aguirre', 1, NULL, NULL, 'waki2020', '1', 2, 20, 1, 'tiene sucios los puertos de carga no funcionan.', '5', 299930, 56987, 0, 299930, 5, '2024-05-13 20:47:00', '2024-05-20 20:44:26'),
(2, '2024-05-17', 'Michael Aguirre', 1, NULL, NULL, '123456', '1', 1, 18, 2, 'necesita mantenimiento ', '3', 49980, 9496, 0, 49980, 0, '2024-05-11 21:50:00', '2024-05-20 09:00:45'),
(3, '2024-05-22', 'Michael Aguirre', 2, NULL, NULL, NULL, NULL, 1, 45, 1, 'bla', '1', 29990, 5698, 0, 24292, NULL, '2024-05-20 06:52:00', '2024-05-23 20:05:52'),
(4, '2024-05-23', 'Michael Aguirre', 3, NULL, NULL, '0433', '1', 1, 119, 2, 'El equipo necesita mantención y reparación de bluetooth', '5', 0, 3798, 19990, 19990, NULL, '2024-05-20 16:53:00', '2024-05-23 20:09:25');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `orden_has_servicios`
--

CREATE TABLE `orden_has_servicios` (
  `id` int(11) NOT NULL,
  `orden_id` int(11) NOT NULL,
  `servicio_id` int(11) NOT NULL,
  `responsable` varchar(255) NOT NULL,
  `garantia_id` int(2) DEFAULT NULL,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `orden_has_servicios`
--

INSERT INTO `orden_has_servicios` (`id`, `orden_id`, `servicio_id`, `responsable`, `garantia_id`, `created_at`) VALUES
(1, 1, 1, 'Michael Aguirre', NULL, '2024-05-15 18:12:00'),
(2, 1, 6, 'Michael Aguirre', NULL, '2024-05-15 18:15:00'),
(3, 1, 7, 'Michael Aguirre', NULL, '2024-05-15 18:15:00'),
(4, 2, 4, 'Michael Aguirre', NULL, '2024-05-16 18:40:00'),
(5, 1, 10, 'Michael Aguirre', NULL, '2024-05-17 19:59:00'),
(6, 1, 8, 'Michael Aguirre', 4, '2024-05-17 20:18:00'),
(7, 1, 4, 'Michael Aguirre', 5, '2024-05-20 20:44:00'),
(8, 3, 4, 'Michael Aguirre', NULL, '2024-05-23 18:28:00');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `personas`
--

CREATE TABLE `personas` (
  `id` int(10) UNSIGNED NOT NULL,
  `nombre` varchar(45) NOT NULL,
  `direccion` varchar(45) DEFAULT NULL,
  `telefono` int(11) DEFAULT NULL,
  `mail` varchar(45) DEFAULT NULL,
  `run` varchar(45) DEFAULT NULL,
  `estado` int(10) DEFAULT NULL,
  `users_id` int(10) UNSIGNED NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `preguntas`
--

CREATE TABLE `preguntas` (
  `id` int(11) NOT NULL,
  `descripcion` varchar(100) NOT NULL,
  `estado` int(250) NOT NULL,
  `created_at` timestamp NULL DEFAULT current_timestamp(),
  `updated_at` timestamp NULL DEFAULT current_timestamp() ON UPDATE current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `preguntas`
--

INSERT INTO `preguntas` (`id`, `descripcion`, `estado`, `created_at`, `updated_at`) VALUES
(1, 'Equipo presenta abollones, golpes, caídas y eventos que dañen el cuerpo del equipo?', 0, NULL, '2020-03-13 08:09:00'),
(2, '¿Equipo presenta imagen?', 0, NULL, NULL),
(3, 'Presenta en la pantalla ¿Golpes, roturas, trizaduras?', 0, NULL, NULL),
(4, '¿Funciona botón de volumen y silencio?', 0, NULL, '2020-02-06 08:22:37'),
(5, '¿Falta algún perno de seguridad?', 0, NULL, NULL),
(6, '¿Funciona el FLASH y VIBRADOR?', 0, NULL, '2020-02-06 08:22:40'),
(7, '¿Funciona el puerto de carga y jack de audio?', 0, NULL, NULL),
(8, '¿Funciona Auricular y Bocina de Altavoces?', 0, NULL, '2020-02-06 08:23:15'),
(9, '¿Equipo ha sido manipulado anteriormente?', 0, NULL, NULL),
(10, '¿Funciona sensor de proximidad?', 0, NULL, '2020-02-06 08:23:37'),
(11, '¿Contacto con alguna especia de líquido, de forma directa o indirecta?', 0, NULL, NULL),
(12, '¿Funciona cámara frontal y trasera?', 0, NULL, '2020-02-06 08:24:00'),
(13, '¿Usa cargador original?', 0, NULL, '2020-09-30 19:43:48'),
(14, '¿Funciona Face ID?', 0, NULL, '2020-02-06 08:22:04'),
(15, '¿Funciona botón HOME, TOUCH ID?', 0, NULL, '2020-02-06 08:22:10'),
(16, '¿Funciona WI-FI?', 0, NULL, '2020-02-06 07:47:18'),
(17, '¿Funciona botón POWER?', 0, NULL, '2020-02-06 07:47:23'),
(18, '¿Funciona el táctil en su totalidad?', 0, NULL, '2020-07-08 03:11:58'),
(20, '¿El Trackpad está en buenas condiciones?', 0, NULL, '2020-07-08 03:13:17'),
(21, '¿Tiene disco SSD o HDD?', 0, NULL, '2020-07-08 03:13:26'),
(22, '¿Cuantos ciclos tiene la bateria?', 0, NULL, '2020-07-08 03:13:35'),
(23, '¿Estas en Mac Os Mojave o superior?', 0, NULL, '2020-07-08 03:13:55'),
(24, '¿El disco esta encriptado con File Vault/EFI?', 0, NULL, '2020-07-08 03:14:11'),
(25, '¿Se autoriza el borrado de datos?', 0, NULL, '2020-07-08 03:14:50'),
(26, '¿Funciona la camara?', 0, NULL, '2020-07-08 03:14:58'),
(27, '¿Funciona puerto de carga?', 0, NULL, '2020-07-08 03:15:08'),
(30, 'Está en Mac Os Catalina o superior', 0, '2020-09-16 00:10:13', '2020-09-16 00:10:13'),
(31, 'En caso de que se deba borrar la información, se puede continuar', 0, '2020-09-16 00:10:28', '2020-09-16 00:10:28'),
(32, 'Funciona el teclado', 0, '2020-09-16 00:23:03', '2020-09-16 00:23:03'),
(33, 'PORCENTAJE DE BATERÍA', 0, '2020-10-01 18:54:30', '2020-10-01 18:54:30');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `respuestas`
--

CREATE TABLE `respuestas` (
  `id` int(11) NOT NULL,
  `pregunta_id` int(11) DEFAULT NULL,
  `respuesta` varchar(45) DEFAULT NULL,
  `orden_id` int(11) DEFAULT NULL,
  `check_resp` tinyint(1) DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT current_timestamp(),
  `updated_at` timestamp NULL DEFAULT current_timestamp() ON UPDATE current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_general_ci;

--
-- Volcado de datos para la tabla `respuestas`
--

INSERT INTO `respuestas` (`id`, `pregunta_id`, `respuesta`, `orden_id`, `check_resp`, `created_at`, `updated_at`) VALUES
(1, 1, NULL, 1, 0, '2024-05-13 20:50:02', '2024-05-13 20:50:02'),
(2, 2, NULL, 1, 1, '2024-05-13 20:50:02', '2024-05-13 20:50:02'),
(3, 3, NULL, 1, 0, '2024-05-13 20:50:02', '2024-05-13 20:50:02'),
(4, 20, NULL, 1, 1, '2024-05-13 20:50:02', '2024-05-13 20:50:02'),
(5, 22, '80%', 1, 1, '2024-05-13 20:50:02', '2024-05-13 20:50:02'),
(6, 24, NULL, 1, 1, '2024-05-13 20:50:02', '2024-05-13 20:50:02'),
(7, 31, 'No', 1, 0, '2024-05-13 20:50:02', '2024-05-13 20:50:02'),
(8, 30, NULL, 1, 1, '2024-05-13 20:50:02', '2024-05-13 20:50:02'),
(9, 5, NULL, 1, 1, '2024-05-13 20:50:02', '2024-05-13 20:50:02'),
(10, 21, NULL, 1, 1, '2024-05-13 20:50:02', '2024-05-13 20:50:02'),
(11, 7, NULL, 1, 1, '2024-05-13 20:50:02', '2024-05-13 20:50:02'),
(12, 8, NULL, 1, 1, '2024-05-13 20:50:02', '2024-05-13 20:50:02'),
(13, 32, NULL, 1, 1, '2024-05-13 20:50:02', '2024-05-13 20:50:02'),
(14, 9, NULL, 1, 1, '2024-05-13 20:50:02', '2024-05-13 20:50:02'),
(15, 1, NULL, 2, 0, '2024-05-13 21:54:18', '2024-05-13 21:54:18'),
(16, 3, NULL, 2, 1, '2024-05-13 21:54:18', '2024-05-13 21:54:18'),
(17, 4, NULL, 2, 1, '2024-05-13 21:54:18', '2024-05-13 21:54:18'),
(18, 5, NULL, 2, 1, '2024-05-13 21:54:18', '2024-05-13 21:54:18'),
(19, 7, NULL, 2, 1, '2024-05-13 21:54:18', '2024-05-13 21:54:18'),
(20, 9, NULL, 2, 1, '2024-05-13 21:54:18', '2024-05-13 21:54:18'),
(21, 11, NULL, 2, 1, '2024-05-13 21:54:18', '2024-05-13 21:54:18'),
(22, 13, NULL, 2, 1, '2024-05-13 21:54:18', '2024-05-13 21:54:18'),
(23, 3, NULL, 3, 1, '2024-05-20 06:54:05', '2024-05-20 06:54:05'),
(24, 5, NULL, 3, 1, '2024-05-20 06:54:05', '2024-05-20 06:54:05'),
(25, 7, NULL, 3, 1, '2024-05-20 06:54:05', '2024-05-20 06:54:05'),
(26, 9, NULL, 3, 1, '2024-05-20 06:54:05', '2024-05-20 06:54:05'),
(27, 11, NULL, 3, 1, '2024-05-20 06:54:05', '2024-05-20 06:54:05'),
(28, 12, NULL, 3, 1, '2024-05-20 06:54:05', '2024-05-20 06:54:05'),
(29, 13, NULL, 3, 1, '2024-05-20 06:54:05', '2024-05-20 06:54:05'),
(30, 15, NULL, 3, 0, '2024-05-20 06:54:05', '2024-05-20 06:54:05'),
(31, 17, NULL, 3, 1, '2024-05-20 06:54:05', '2024-05-20 06:54:05'),
(32, 16, NULL, 3, 0, '2024-05-20 06:54:05', '2024-05-20 06:54:05'),
(33, 18, NULL, 3, 1, '2024-05-20 06:54:05', '2024-05-20 06:54:05'),
(34, 8, NULL, 3, 0, '2024-05-20 06:54:05', '2024-05-20 06:54:05'),
(35, 4, NULL, 3, 1, '2024-05-20 06:54:05', '2024-05-20 06:54:05'),
(36, 14, NULL, 3, 1, '2024-05-20 06:54:05', '2024-05-20 06:54:05'),
(37, 10, NULL, 3, 1, '2024-05-20 06:54:05', '2024-05-20 06:54:05'),
(38, 1, NULL, 3, 1, '2024-05-20 06:54:05', '2024-05-20 06:54:05'),
(39, 2, NULL, 3, 1, '2024-05-20 06:54:05', '2024-05-20 06:54:05'),
(40, 6, NULL, 3, 1, '2024-05-20 06:54:05', '2024-05-20 06:54:05'),
(41, 33, NULL, 3, 1, '2024-05-20 06:54:05', '2024-05-20 06:54:05'),
(42, 1, NULL, 4, 1, '2024-05-20 16:57:01', '2024-05-20 16:57:01'),
(43, 3, ' rayones en la pantalla', 4, 1, '2024-05-20 16:57:01', '2024-05-20 16:57:01'),
(44, 4, NULL, 4, 1, '2024-05-20 16:57:01', '2024-05-20 16:57:01'),
(45, 5, NULL, 4, 0, '2024-05-20 16:57:01', '2024-05-20 16:57:01'),
(46, 7, NULL, 4, 1, '2024-05-20 16:57:01', '2024-05-20 16:57:01'),
(47, 9, NULL, 4, 0, '2024-05-20 16:57:01', '2024-05-20 16:57:01'),
(48, 11, NULL, 4, 0, '2024-05-20 16:57:01', '2024-05-20 16:57:01'),
(49, 13, NULL, 4, 0, '2024-05-20 16:57:01', '2024-05-20 16:57:01');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `revisiones`
--

CREATE TABLE `revisiones` (
  `id` int(11) NOT NULL,
  `orden_id` int(10) UNSIGNED NOT NULL,
  `responsable` varchar(45) DEFAULT NULL,
  `id_estado` int(1) DEFAULT NULL,
  `observacion` longtext DEFAULT NULL,
  `garantia_id` int(11) DEFAULT NULL,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_general_ci;

--
-- Volcado de datos para la tabla `revisiones`
--

INSERT INTO `revisiones` (`id`, `orden_id`, `responsable`, `id_estado`, `observacion`, `garantia_id`, `created_at`) VALUES
(1, 1, 'Michael Aguirre', 2, 'prueba', NULL, '2024-05-14 05:14:00'),
(2, 1, 'Michael Aguirre', 2, 'Se realizo una mantencion general pero esta a la espera del puerto de reemplazo', NULL, '2024-05-14 05:18:00'),
(3, 1, 'Michael Aguirre', 3, 'Se reemplazo el modulo de carga y se realizo un baño químico.', NULL, '2024-05-16 15:27:00'),
(4, 1, 'Michael Aguirre', 3, 'Se realizo una restauración total del sistema', NULL, '2024-05-16 16:01:00'),
(5, 1, 'Michael Aguirre', 3, 'Equipo Listo para retiro', NULL, '2024-05-16 16:07:00'),
(6, 1, 'Michael Aguirre', 3, 'exito', NULL, '2024-05-16 16:09:00'),
(7, 2, 'Michael Aguirre', 2, 'El dispositivo de encuentra con fallas', NULL, '2024-05-16 17:16:00'),
(8, 2, 'Michael Aguirre', 2, 'se detecto falla en el software', NULL, '2024-05-16 18:15:00'),
(13, 2, 'Michael Aguirre', 2, 'se realizo un respaldo de informacion', NULL, '2024-05-16 18:40:00'),
(14, 1, 'Michael Aguirre', 2, 'prueba de garantia', NULL, '2024-05-17 19:58:00'),
(15, 1, 'Michael Aguirre', 4, 'prueba garantia v2', 4, '2024-05-17 20:15:00'),
(16, 2, 'Michael Aguirre', 2, 'Listo para entrega', NULL, '2024-05-17 20:23:00');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `servicios`
--

CREATE TABLE `servicios` (
  `id` int(11) NOT NULL,
  `nombre` varchar(50) NOT NULL,
  `precio` int(45) NOT NULL,
  `estado` int(250) NOT NULL DEFAULT 1,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp(),
  `updated_at` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_general_ci;

--
-- Volcado de datos para la tabla `servicios`
--

INSERT INTO `servicios` (`id`, `nombre`, `precio`, `estado`, `created_at`, `updated_at`) VALUES
(1, 'Mantenimiento', 19990, 1, '2024-05-13 21:14:46', '2024-06-17 20:45:35'),
(2, 'Cambio de bateria', 19990, 1, '2024-05-13 21:14:46', '2024-05-13 21:14:46'),
(3, 'Recuperación iCloud', 29990, 1, '2024-05-14 01:06:40', '2024-05-14 01:06:40'),
(4, 'Respaldo de información', 29990, 1, '2024-05-14 01:06:40', '2024-05-14 01:06:40'),
(5, 'Cambio de pantalla', 19990, 1, '2024-05-14 01:13:07', '2024-05-14 01:13:07'),
(6, 'Baño Quimico', 29990, 1, '2024-05-14 01:13:07', '2024-05-14 01:13:07'),
(7, 'Restauración de sistema', 29990, 1, '2024-05-15 16:56:25', '2024-05-15 16:56:25'),
(8, 'Cambio de vibrador', 39990, 1, '2024-05-15 17:02:32', '2024-05-15 17:02:32'),
(9, 'Recuperación de cuenta', 29990, 1, '2024-05-15 17:07:56', '2024-05-15 17:07:56'),
(10, 'Cambio de disco SSD', 129990, 1, '2024-05-15 17:10:42', '2024-05-15 17:10:42'),
(11, 'Cambio de Cristal trasero 11 Pro Max', 69990, 1, '2024-05-20 20:45:56', '2024-05-20 20:45:56'),
(18, 'Cambio de bateria', 20000, 1, '2024-06-19 22:40:49', '2024-06-19 22:41:02'),
(19, 'Cambio de pantalla', 20000, 0, '2024-06-19 22:41:14', '2024-06-19 22:41:14');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `users`
--

CREATE TABLE `users` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `name` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL,
  `permiso` int(11) DEFAULT NULL,
  `estado` int(11) DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Volcado de datos para la tabla `users`
--

INSERT INTO `users` (`id`, `name`, `email`, `password`, `permiso`, `estado`, `created_at`, `updated_at`) VALUES
(1, 'Michael Aguirre', 'm14gs4@gmail.com', '$2a$10$UY/soHjgVK4MEb97sfzXmeAfAe8Aff8QT5BNxi5ZQbJlwfhfGsh6a', NULL, 1, NULL, NULL),
(2, 'Misael Sobrevia Rodrigue', 'contacto@istylestore.cl', '$2a$10$pEsmHHdWh79xtSFBniYLeeBcixh09xZOTVI61k8j9nZhuB0f6xx.y', NULL, 1, NULL, NULL),
(3, 'Erick', 'erick.jiron@gmail.com', '$2a$10$P2S0HlpSBOIrt/UXnV9fWuzqu43C/042WJp8YgCMCLuOes0j1N32y', NULL, 1, NULL, NULL),
(4, 'Miguel Angel Fernando Araya Espinoza', 'miguel.pctec@gmail.com', '$2a$10$fi3P1QsIRKEwz43IX7f.F.UXax3iwmazK6EfhLGNG17LYsgkJrMDq', NULL, 0, NULL, NULL);

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `clientes`
--
ALTER TABLE `clientes`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `dispositivos`
--
ALTER TABLE `dispositivos`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `equipos`
--
ALTER TABLE `equipos`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `equipo_has__preguntas`
--
ALTER TABLE `equipo_has__preguntas`
  ADD PRIMARY KEY (`id`),
  ADD KEY `id_equipo` (`id_equipo`),
  ADD KEY `id_pregunta` (`id_pregunta`);

--
-- Indices de la tabla `estados_ordenes`
--
ALTER TABLE `estados_ordenes`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `estado_equipos`
--
ALTER TABLE `estado_equipos`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `formadepago`
--
ALTER TABLE `formadepago`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `garantias`
--
ALTER TABLE `garantias`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `ordenes`
--
ALTER TABLE `ordenes`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `orden_has_servicios`
--
ALTER TABLE `orden_has_servicios`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `personas`
--
ALTER TABLE `personas`
  ADD PRIMARY KEY (`id`),
  ADD KEY `estado` (`estado`);

--
-- Indices de la tabla `preguntas`
--
ALTER TABLE `preguntas`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `respuestas`
--
ALTER TABLE `respuestas`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `revisiones`
--
ALTER TABLE `revisiones`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `servicios`
--
ALTER TABLE `servicios`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `users_email_unique` (`email`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `clientes`
--
ALTER TABLE `clientes`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=55;

--
-- AUTO_INCREMENT de la tabla `dispositivos`
--
ALTER TABLE `dispositivos`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=139;

--
-- AUTO_INCREMENT de la tabla `equipos`
--
ALTER TABLE `equipos`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=50;

--
-- AUTO_INCREMENT de la tabla `equipo_has__preguntas`
--
ALTER TABLE `equipo_has__preguntas`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=298;

--
-- AUTO_INCREMENT de la tabla `estados_ordenes`
--
ALTER TABLE `estados_ordenes`
  MODIFY `id` int(10) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;

--
-- AUTO_INCREMENT de la tabla `estado_equipos`
--
ALTER TABLE `estado_equipos`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT de la tabla `formadepago`
--
ALTER TABLE `formadepago`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT de la tabla `garantias`
--
ALTER TABLE `garantias`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT de la tabla `ordenes`
--
ALTER TABLE `ordenes`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT de la tabla `orden_has_servicios`
--
ALTER TABLE `orden_has_servicios`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;

--
-- AUTO_INCREMENT de la tabla `personas`
--
ALTER TABLE `personas`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `preguntas`
--
ALTER TABLE `preguntas`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=34;

--
-- AUTO_INCREMENT de la tabla `respuestas`
--
ALTER TABLE `respuestas`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=50;

--
-- AUTO_INCREMENT de la tabla `revisiones`
--
ALTER TABLE `revisiones`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=17;

--
-- AUTO_INCREMENT de la tabla `servicios`
--
ALTER TABLE `servicios`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=20;

--
-- AUTO_INCREMENT de la tabla `users`
--
ALTER TABLE `users`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- Restricciones para tablas volcadas
--

--
-- Filtros para la tabla `equipo_has__preguntas`
--
ALTER TABLE `equipo_has__preguntas`
  ADD CONSTRAINT `idequipo` FOREIGN KEY (`id_equipo`) REFERENCES `equipos` (`id`),
  ADD CONSTRAINT `idpregunta` FOREIGN KEY (`id_pregunta`) REFERENCES `preguntas` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Filtros para la tabla `personas`
--
ALTER TABLE `personas`
  ADD CONSTRAINT `id_estados` FOREIGN KEY (`estado`) REFERENCES `estados_ordenes` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
