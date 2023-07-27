<x-app-layout>

    <div class="w-full p-8 px-4 py-8 sm:p-8">
        <div class="max-w-7xl mx-auto px-0 sm:px-6 lg:px-8 flex justify-between">
            <div>
                <h2 class="font-semibold text-xl text-gray-800 leading-tight">
                    {{__('Products')}}
                </h2>
            </div>
            <div class="">
                <a href="{{route('products.create')}}"
                    class="leading-tight font-semibold">New Product</a>
            </div>
        </div>
    </div>

    <div class="flex justify-center mt-4">
        <div>
            {{$products->links()}}
        </div>
    </div>

    <div class="relative overflow-x-auto shadow-md sm:rounded-lg mt-4 sm:mx-auto max-w-7xl">
        <table class="w-full text-sm text-left text-gray-800">
            <thead class=" text-semibold text-xs text-gray-800 uppercase bg-gray-500 text-white">
                <tr>
                    <th scope="col" class="px-6 py-3">
                        Name
                    </th>
                    <th scope="col" class="px-6 py-3">
                        Action
                    </th>
                </tr>
            </thead>
            <tbody class="text-white">
                @foreach($products as $product)
                <tr class="border-b bg-gray-800 border-gray-700 overflow-clip text-white">
                    <td scope="row" class="px-6 py-4 font-medium text-gray-500 whitespace-normal dark:text-white">
                        <a href="{{route('products.show', $product)}}">
                            <div class="flex items-center space-x-4">
                                @if($product->photos->count()>0)
                                <img src="{{asset('storage/' . $product->photos->first()->path)}}"
                                    alt="{{$product->name}}" class="w-10 h-10 object-cover rounded-full">
                                @else
                                <img src="img/no-photo.jpg" alt="{{$product->name}}"
                                    class="w-10 h-10 object-cover rounded-full text-white">
                                @endif
                                <span>{{ $product->name }}</span>
                            </div>
                        </a>
                    </td>
                    <td class="px-6 py-4">
                        <a href="{{route('products.edit', $product)}}"
                            class="font-medium text-green-600 text-green-500 hover:underline">
                                EDIT
                        </a>
                        <form action="{{route('products.destroy', $product)}}" method="POST"
                            onsubmit="return confirm('Tem certeza que deseja excluir este produto?')">
                            @csrf
                            @method('DELETE')
                            <button href="" class="font-medium text-red-600 white:text-red-500 hover:underline">
                            DELETE
                            </button>
                        </form>
                    </td>
                </tr>
                @endforeach
            </tbody>
        </table>
    </div>
</x-app-layout>
