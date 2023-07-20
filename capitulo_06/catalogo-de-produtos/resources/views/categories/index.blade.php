<x-app-layout>

    <div class="flex justify-between bg-gray-800 w-full p-8">
        <div class="">
            <h2 class="font-semibold text-xl text-gray-800 dark:text-gray-200 leading-tight">
                {{ __('Categories') }}
            </h2>
        </div>
        <div class="">
            <a href="{{route('categories.create')}}"
                class="dark:text-gray-200 leading-tight">New Category</a>
        </div>
    </div>

    <div class="relative overflow-x-auto shadow-md sm:rounded-lg">
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
                @foreach($categories as $category)
                <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 overflow-clip">
                    <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-normal text-wrap dark:text-white">
                        <a href="{{route('categories.show', $category)}}">
                            {{ $category->name }}
                        </a>
                    </th>
                    <td class="px-6 py-4 md:space-x-4">
                        <a href="{{route('categories.edit', $category->id)}}" class="font-medium text-blue-600 dark:text-blue-500 hover:underline">Edit</a>
                        <form action="{{route('categories.destroy', $category)}}" method="post"
                                onsubmit="return confirm('Tem certeza que deseja excluir esta categoria?')">
                                @csrf
                                @method('DELETE')
                            <button href="" class="font-medium text-red-600 dark:text-red-500 hover:underline">
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
