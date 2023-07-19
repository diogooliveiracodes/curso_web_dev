<x-app-layout>

    <div class="flex justify-between bg-gray-800 w-full p-8">
        <div class="">
            <h2 class="font-semibold text-xl text-gray-800 white:text-gray-200 leading-tight">
                {{__('Categories')}}
            </h2>
        </div>
        <div class="">
            <a href="{{route('categories.create')}}"
                class="white:text-gray-200 leading-tight">New Category</a>
        </div>
    </div>

@foreach ($categories as $category)
    <p>{{$category->name}}</p>
@endforeach
</x-app-layout>
