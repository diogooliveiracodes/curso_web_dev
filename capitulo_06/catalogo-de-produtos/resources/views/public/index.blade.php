<!DOCTYPE html>
<html lang="pt-br">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>{{ $company->name }}</title>

    <!-- Scripts -->
    @vite(['resources/css/app.css', 'resources/js/app.js'])
</head>

<body>
    {{-- CATEGORIES --}}
    <nav class="bg-gray-800 text-white p-4">
        <ul class="flex space-x-4">
            <li><a href="{{route('store.index', ['company_id' => $company->id])}}">All</a></li>
            @foreach($categories as $category)
            <li><a href="{{route('store.index', ['company_id' => $company->id, 'category_id' => $category->id])}}">{{$category->name}}</a></li>
            @endforeach
        </ul>
    </nav>
    {{-- SEARCH --}}
    <form action="{{route('store.index', ['company_id' => $company->id])}}" method="GET">
        <div class="flex justify-center mt-4 gap-x-4">
            <input type="text" name="product_name" id="product_name" placeholder="Nome do produto" class="border border-gray-300 rounded-md p-2">
            <input hidden type="text" value="{{$category_id}}" name="category_id" id="category_id">
            <button type="submit" class="bg-gray-800 text-white rounded-md p-2">Buscar</button>
        </div>
    </form>
    <section class="">
        <div class="bg-white">
            <div class="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
                <h2 class="sr-only">Products</h2>
                {{ $products->links() }}
                <div class="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
                    @foreach ($products as $product)
                        <a href="#" class="group">
                            <div
                                class="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-h-8 xl:aspect-w-7">
                                @if ($product->photos->count() > 0)
                                    <img src="{{ asset('storage/' . $product->photos->first()->path) }}"
                                        alt="Tall slender porcelain bottle with natural clay textured body and cork stopper."
                                        class="h-full w-full object-cover object-center group-hover:opacity-75">
                                @else
                                    <img src="{{ asset('img/no-photo.png') }}"
                                        alt="Tall slender porcelain bottle with natural clay textured body and cork stopper."
                                        class="h-full w-full object-cover object-center group-hover:opacity-75">
                                @endif
                            </div>
                            <h3 class="mt-4 text-sm text-gray-700">{{$product->name}}</h3>
                            <p class="mt-1 text-lg font-medium text-gray-900">R${{number_format($product->price, 2, ',', '.')}}</p>
                        </a>
                    @endforeach
                </div>
            </div>
        </div>
    </section>

</body>

</html>
