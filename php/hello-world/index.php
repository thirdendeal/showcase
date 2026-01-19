<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Hello, World!</title>
</head>

<body>

  <?php

  // Hello, World!
  // -------------------------------------------------------------------
  //
  // https://www.php.net/manual/en/introduction.php

  // PHP: Hypertext Preprocessor
  //
  // Scripting language that can be embedded into HTML

  // -------------------------------------------------------------------

  // PHP requires instructions to be terminated with a semicolon

  echo "Hello, World!";

  // Line Feed Collapsing
  //
  // PHP removes the line feed immediately after the end processing instruction

  ?>

  <br />
  <br />

  <!-- PHP Tags -->
  <!-- ------------------------------------------------------------- -->

  <?php echo 'PHP tag' ?> <!-- The closing tag implies a semicolon -->
  <?= '|| Short echo tag' ?>
  <? echo '|| Short tag (if enabled)' ?>

</body>

</html>
