<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <title>Vulnerable Input</title>
    <meta name="viewport" content="width=device-width, initial-scale=1">
</head>
<body>
    <form>
        <input name="field" type="text" />
        <input type="submit" />
        <h4>Result: <?= $_GET['field'] ?> </h4>
    </form>
</body>
</html>