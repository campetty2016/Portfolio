<?php

$Name = $_POST['Name'];

$Email = $_POST['Email'];

$Subject = "Contact - Portfolio";

$Message = $_POST['Message'];

$To = 'cmpetty17@gmail.com';

$Body = 'From: '. $Name ."\n";

$Body .= 'E-mail: '. $Email."\n";

$Body .= 'Message: '. $Message;

$Headers = "From: $field_email\n";

$Headers .= "Reply-To: $to\n";

$Mail = mail($To, $Subject, $Body, $Headers);

if ($Mail) {

    ?>

    <script language="javascript" type="text/javascript">

        alert('Thank you, your message has been received!');

    </script>

    <?php
} else {

    ?>

    <script language="javascript" type="text/javascript">

        alert('Message failed!');

    </script>

    <?php
}
?>
