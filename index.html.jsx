<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <script defer src="./src/data.js"></script>
    <link rel="stylesheet" href="path_to_stylesheet" />
    <title>zkpr</title>
</head>
<body>
    <header id="menu">
        <h1>Welcome to zkpr.</h1>
        <div class="container">
            <form id="animal-form">
                <label for="name">Name</label>
                <input type="text" id="name" name="name" />
                <label for="image_url">Image URL</label>
                <input type="text" id="image_url" name="image_url" />
                <label for="description">Description</label>
                <textarea id="description" name="description"></textarea>
                <button type="submit">Adopt Animal</button>
            </form>
            <ul id="animal-list" class="cards">
                <!-- Animals here -->
            </ul>
        </div>
    </header>
</body>
</html>