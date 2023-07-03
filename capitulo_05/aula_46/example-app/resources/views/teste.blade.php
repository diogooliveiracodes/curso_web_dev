<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Teste</title>
</head>
<body>
    <h1>Hello World!</h1>
    @php
        use App\User;
        $user = User::find(1);
    @endphp
    <h2>{{ $user->name }}</h2>
</body>
</html>
