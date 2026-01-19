<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Forms (Get Page)</title>
</head>

<body>
  <p>Hi <?php echo htmlspecialchars($_GET['name']); ?>.</p>
  <p>You are <?php echo (int) $_GET['age']; ?> years old.</p>
</body>

</html>
