<x-app-layout>

    <div class=" bg-gray-800 p-8 text-white">
        <div class="sm:max-w-7xl mx-auto flex sm:px-4">
            <h2 class="font-semibold text-xl text-white-800 dark:text-gray-200 leading-tight">
                {{ __('Products') }}
            </h2>
        </div>
    </div>

    <div class="mx-auto px-4 sm:max-w-7xl">
        <div class="relative mt-4 rounded-md shadow-sm text-dark">
            {{-- NAME --}}
            <div class="my-4">
                <h2>Product Name:</h2>
                <p class="text-gray-500 font-thin">{{ $product->name }}</p>
            </div>
            <hr>
            {{-- CATEGORY --}}
            <div class="my-4">
                <h2>Category:</h2>
                <p class="text-gray-500 font-thin">{{ $product->category->name }}</p>
            </div>
            <hr>
            {{-- PRICE --}}
            <div class="my-4">
                <h2>Price:</h2>
                <p class="text-gray-500 font-thin">R${{ number_format($product->price, 2, ',', '.') }}</p>
            </div>
            <hr>
            {{-- DESCRIPTION --}}
            <div class="my-4">
                <h2>Description:</h2>
                <p class="text-gray-500 font-thin">{{ $product->description }}</p>
            </div>
            <hr>

            {{-- IMAGES --}}
            <div class="my-4">
                <h2>Photos:</h2>
                <div class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 mt-4">
                    @foreach ($product->photos as $photo)
                        <div class="bg-white p-4 rounded-lg shadow">
                            <img src="{{ asset('storage/' . $photo->path) }}" alt="{{ $product->name }}"
                                class="w-full h-40 object-cover rounded">
                        </div>
                    @endforeach
                </div>
            </div>

        </div>
        <div class="flex gap-x-4 pb-4">
            <a href="{{ route('products.edit', $product->id) }}"
                class="bg-white mt-4 hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow">
                Edit
            </a>
            <a href="{{ route('products.index') }}"
                class="bg-white mt-4 hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow">
                Back
            </a>
        </div>
    </div>


</x-app-layout>
