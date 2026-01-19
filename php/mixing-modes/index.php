<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Mixing Modes</title>
</head>

<body>

  <?php
  if (str_contains($_SERVER['HTTP_USER_AGENT'], 'Firefox')) {
  ?>

    <p>You are using Firefox</p>

  <?php
  } else {
  ?>

    <p>You are not using Firefox</p>

  <?php
  }
  ?>

</body>

</html>
