<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>{{$company->name}}</title>
</head>
<body>
    <h1>{{$company->name}}</h1>
    {{$products->links()}}
    @foreach ($products as $product)
        <p>{{$product->name}} - Category: {{$product->category->name}}</p>
        @if($product->photos->count() > 1)
        <img src="{{asset('storage/'. $product->photos->first()->path ) }}" alt="">
        @endif
        <img src="/img/no-photo.png" alt="">
    @endforeach
</body>
</html>
