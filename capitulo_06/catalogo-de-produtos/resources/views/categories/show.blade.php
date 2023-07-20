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

    <div class="mx-auto px-4">
            <div class="relative mt-4 rounded-md shadow-sm">
              <input type="text" name="name" id="name"
                class="block w-full rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                value="{{$category->name}}" disabled>
            </div>
            <a href="{{route('categories.index')}}"
                class="bg-white mt-4 hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow"
                type="submit">
                Back
            </a>
    </div>

</x-app-layout>
