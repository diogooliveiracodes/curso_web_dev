<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>{{$company->name}}</title>

    @vite(['resources/css/app.css', 'resources/js/app.js'])
</head>
<body>
    <nav>
        @foreach ($categories as $category)
            <a href="{{route('store.index', ['company_id' =>$company->id])}}"></a>
        @endforeach
    </nav>
    <section class="">
        <div class="bg-white">
            <div class="mx-auto max-w-2xl px-4 py-16 sm:py-24 lg:max-w-7xl lg:px8">
                <h2 class="sr-only">Products</h2>
                {{$products->links()}}
                <div class="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl-gap-x-8">
                    @foreach
                        <a href="#" class="group">
                            <div class="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-h-8 xl:aspect-w-7">
                                @if ($product->photos->count() > 0)
                                    <img src="{{asset('storage/' . $product->photos->first()->path)}}"
                                         alt="Tall slender porcelain bottle whith natural clay textured body and cork stopper."
                                         class="h-full w-full object-cover object-center group-hover:opacity-75">
                                @else
                                    <img src="{{asset('img/no-photo.jpg')}}"
                                        alt="Tall slender porcelain bottle whith natural clay textured body and cork stopper."
                                        class="h-full w-full object-cover object-center group-hover:opacity-75">
                                @endif
                            </div>
                            <h3 class="mt-4 text-sm text-gray-700">{{$product->name}}</h3>
                            <p class="mt-1 text-lg font-medium text-gray-900">R${{number_format($produrct->price,2,',', '.')}}</p>
                        </a>
                    @endforeach
                </div>
            </div>
        </div>
    </section>

</body>
</html>
