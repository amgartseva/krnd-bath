<?php

$to = "rvtremont@gmail.com"; //rvtremont@gmail.com
$subject = "Заявка с лендинга Ремонт ванн под ключ";
$charset = "utf-8";
$headers = "Content-type: text/html; charset=$charset\r\n";

// POST
$utm = json_decode($_POST['utm']);
$params = json_decode($_POST['params']);
$name = $_POST["name"];
$type = $_POST['type'];
$phone = $_POST["phone"];
$time = $_POST["time"];

function getName($name)
{
    if (empty($name)) {
        return null;
    } else {
        return $name;
    }
}

function getPhone($phone)
{
    if (empty($phone)) {
        return null;
    } else {
        return $phone;
    }
}

function getUtm($utm)
{
    if ($utm->source === "") {
        return null;
    } else {
        return $utm;
    }
};

$msg = "
<table style='border-collapse: collapse; border-left: 5px solid #f2c94c;'>
<thead colspan='3'>
  <td style='padding: 0 0 0 16px'>
    <img 
      style='width:40px; height: 35px'
      src='https://rvtremontspb.ru/build/images/logo.png'
      alt='logo'
    />
  </td>
  <td colspan='2' style='font-size: 22px; color: #333;'>
  $type
  </td>
</thead>
<tbody>";

if (!empty($name)) {
    $msg .= "<tr>
    <td style='text-align: left; padding: 4px 16px; color: #888; font-size: 14px'>
      Имя:
    </td>
    <td style='text-align: left; padding: 4px 16px; color: #333; font-size: 16px;'>
        $name
    </td>
    <td></td>
  </tr>";
}

if (empty($phone)) {
    die();
} else {
    $msg .= "
    <tr>
        <td style='text-align: left; padding: 4px 16px; color: #888; font-size: 14px'>
        Телефон:
        </td>
        <td style='text-align: left; padding: 4px 16px; color: #333; font-size: 16px;'>
        $phone
        </td>
        <td></td>
    </tr>";
}

if (empty($time)) {
    $msg .= "
    <tr>
        <td style='text-align: left; padding: 4px 16px; color: #888; font-size: 14px'>
        Время для звонка:
        </td>
        <td style='text-align: left; padding: 4px 16px; color: #333; font-size: 16px; '>
        Позвонить в ближайшее время
        </td>
        <td></td>
    </tr>";
} else {
    $msg .= "
    <tr>
        <td style='text-align: left; padding: 4px 16px; color: #888; font-size: 14px'>
            Время для звонка:
        </td>
        <td style='text-align: left; padding: 4px 16px; color: #333; font-size: 16px;'>
            $time
        </td>
        <td></td>
    </tr>";
};

if ($type == 'Лендинг. Заявка с калькулятора') {
    $msg .= "<tr>
    <td style='padding: 12px 0;' colspan='3'></td>
    </tr>
    <tr>
        <td
        style='padding: 16px 0; font-size: 24px; text-align: center; color: #333; '
        colspan='3'
        >
            Калькулятор:
        </td>
    </tr>
    <tr>
        <td style='text-align: left; padding: 4px 16px; color: #888; font-size: 14px'>
            Цена:
        </td>
        <td style='text-align: left; padding: 4px 16px;  color: #333; font-size: 16px;'>
            $params->price
        </td>
        <td></td>
    </tr>
    <tr>
        <td style='text-align: left; padding: 4px 16px; color: #888; font-size: 14px'>
            Тип ремонта:
        </td>
        <td style='text-align: left; padding: 4px 16px;  color: #333; font-size: 16px;'>
            $params->type
        </td>
        <td></td>
    </tr>
    <tr>
    <td style='text-align: left; padding: 4px 16px; color: #888; font-size: 14px'>
        Тип санузла:
    </td>
    <td style='text-align: left; padding: 4px 16px;  color: #333; font-size: 16px;'>
        $params->apartment
    </td>
    <td></td>
</tr>
    <tr>
        <td style='text-align: left; padding: 4px 16px; color: #888; font-size: 14px'>
            Площадь:
        </td>
        <td style='text-align: left; padding: 4px 16px;  color: #333; font-size: 16px;'>
            $params->area
        </td>
        <td></td>
    </tr>
    <tr>
        <td style='text-align: left; padding: 4px 16px; color: #888; font-size: 14px'>
            Демонтаж:
        </td>
        <td style='text-align: left; padding: 4px 16px;  color: #333; font-size: 16px;'>
            $params->dismantling
        </td>
        <td></td>
    </tr>
    <tr>
        <td style='text-align: left; padding: 4px 16px; color: #888; font-size: 14px'>
            Перепланировка:
        </td>
        <td style='text-align: left; padding: 4px 16px;  color: #333; font-size: 16px;'>
            $params->redevelopment
        </td>
        <td></td>
    </tr>
";
}

if ($utm->source !== "") {
    $msg .= "
        <tr>
            <td style='padding: 12px 0;' colspan='3'></td>
        </tr>
        <tr>
            <td
            style='padding: 16px 0; font-size: 24px; text-align: center; color: #333;'
            colspan='3'
            >
            Utm-метки:
            </td>
        </tr>
            <tr style='background: #f1f1f1;'>
            <td style='text-align: left; padding: 4px 16px; color: #888; font-size: 14px'>
            utm_source:
            </td>
            <td style='text-align: left; padding: 4px 16px; color: #333; font-size: 16px;'>
            $utm->source
            </td>
            <td></td>
        </tr>
        </tr>
            <tr style='background: #f1f1f1;'>
            <td style='text-align: left; padding: 4px 16px; color: #888; font-size: 14px'>
            utm_medium:
            </td>
            <td style='text-align: left; padding: 4px 16px; color: #333; font-size: 16px;'>
            $utm->medium
            </td>
            <td></td>
        </tr>
        </tr>
            <tr style='background: #f1f1f1;'>
            <td style='text-align: left; padding: 4px 16px; color: #888; font-size: 14px'>
            utm_campaign:
            </td>
            <td style='text-align: left; padding: 4px 16px; color: #333; font-size: 16px;'>
            $utm->campaign
            </td>
            <td></td>
        </tr>
        </tr>
            <tr style='background: #f1f1f1;'>
            <td style='text-align: left; padding: 4px 16px; color: #888; font-size: 14px'>
            utm_content:
            </td>
            <td style='text-align: left; padding: 4px 16px; color: #333; font-size: 16px;'>
            $utm->content
            </td>
            <td></td>
        </tr>
        </tr>
        <tr style='background: #f1f1f1;'>
            <td style='text-align: left; padding: 4px 16px; color: #888; font-size: 14px'>
            utm_term:
            </td>
            <td style='text-align: left; padding: 4px 16px; color: #333; font-size: 16px;'>
            $utm->term
            </td>
            <td></td>
        </tr>
    </tbody>
</table>
    ";
}

// $bitrix24GetData = array(
//     "LOGIN" => "admin@rvtremontspb.ru",
//     "PASSWORD" => "Gm19mW57s7QiV7AD",
//     "TITLE" => "РВТ " . $phone,
//     "NAME" => getName($name),
//     "PHONE_OTHER" => "8999 9999 99 9", // TODO
//     "OPPORTUNITY" => "100 000", // TODO
//     "SOURCE_ID" => "WEB",
//     "SOURCE_DESCRIPTION" => "", // TODO
//     //  "COMMENTS" => $params . $time
//     "COMPANY_ID" => "1"
// );

// $bitrix24GetData = http_build_query($bitrix24GetData);

// file_get_contents("https://rvt.bitrix24.ru/crm/configs/import/lead.php?" . $bitrix24GetData);

if ((!empty($_POST['phone']))) {
    mail($to, $subject, $msg, $headers);
} else {
    die();
}