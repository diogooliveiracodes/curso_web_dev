<x-app-layout>

    <div class="bg-gray-800 w-full p-8 px-4 py-8 sm:p-8">
        <div class="max-w-7xl mx-auto px-0 sm:px-6 lg:px-8 flex justify-between">
            <div>
                <h2 class="font-semibold text-xl text-gray-800 dark:text-gray-200 leading-tight">
                    {{ __('Product') }}
                </h2>
            </div>
            <div class="">
                <a href="{{route('products.create')}}"
                class="dark:text-gray-200 leading-tight">New Product</a>
            </div>
        </div>
    </div>

    <div class="flex justify-center mt-4">
        <div>
            {{ $products->links() }}
        </div>
    </div>

    <div class="relative overflow-x-auto shadow-md sm:rounded-lg mt-4 sm:mx-auto max-w-7xl">
        <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
            <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                <tr>
                    <th scope="col" class="px-6 py-3">
                        Name
                    </th>
                    <th scope="col" class="px-6 py-3">
                        Action
                    </th>
                </tr>
            </thead>
            <tbody>
                @foreach($products as $product)
                <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 overflow-clip">
                    <td scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-normal text-wrap dark:text-white">
                        <a href="{{route('products.show', $product)}}">
                            {{ $product->name }}
                        </a>
                    </td>
                    <td class="px-6 py-4">
                        <a href="{{route('products.edit', $product->id)}}"
                            class="font-medium text-blue-600 dark:text-blue-500 hover:underline">
                            Edit
                        </a>
                        <form action="{{route('products.destroy', $product)}}" method="post"
                                onsubmit="return confirm('Tem certeza que deseja excluir este produto?')">
                                @csrf
                                @method('DELETE')
                            <button class="font-medium text-red-600 dark:text-red-500 hover:underline">
                                Delete
                            </button>
                        </form>
                    </td>
                </tr>
                @endforeach
            </tbody>
        </table>
    </div>

</x-app-layout>
