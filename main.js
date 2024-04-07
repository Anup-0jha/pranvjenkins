<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>JavaScript Example</title>
</head>
<body>

<h1>JavaScript Example</h1>

<p id="demo">JavaScript can change HTML content.</p>

<button type="button" onclick="changeText()">Click Me!</button>

<script>
function changeText() {
  document.getElementById("demo").innerHTML = "Hello, World!";
}
</script>

</body>
</html>
