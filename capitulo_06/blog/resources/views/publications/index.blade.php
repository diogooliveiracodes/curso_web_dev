<x-app-layout>

    <x-slot name="header">
        {{-- create new publication button --}}
        <div class="flex items-center justify-between mt-4">
            <h2 class="font-semibold text-xl text-gray-800 dark:text-gray-200 leading-tight">
                {{ __('Publications') }}
            </h2>
            <x-button class="ml-4">
                <a href="{{route("publications.create")}}">
                    {{ __('New Publication') }}
                </a>
            </x-button>
        </div>
    </x-slot>

    @foreach($publications as $publication)
    <div class="py-4">
        <div class="max-w-7xl mx-auto sm:px-6 lg:px-8">
            <div class="bg-white dark:bg-gray-800 overflow-hidden shadow-sm sm:rounded-lg">

                    <div class="p-6 text-gray-900 dark:text-gray-100">
                        {{-- <a href="{{route('publications.show', $publication)}}">
                            <i class="fa fa-eye fa-2x"></i>
                        </a> --}}
                        <div class="flex items-center justify-end mt-4">
                            <a href="{{route('publications.edit', $publication)}}">
                                <x-button class="ml-4" type="submit">
                                    {{ __('Edit') }}
                                </x-button>
                            </a>
                            <form action="{{route('publications.destroy', $publication)}}"
                                method="post"
                                onsubmit="return confirm('Tem certeza que deseja excluir esta publicação?')">
                                @csrf
                                @method('DELETE')
                                <x-button class="ml-4" type="submit">
                                    {{ __('Delete') }}
                                </x-button>
                            </form>
                        </div>
                        <a href="{{route('publications.show', $publication)}}">
                            <h1 class="text-3xl font-bold">{{ $publication->title }}</h1>
                        </a>
                        <p class="text-lg text-gray-600 dark:text-gray-400 mb-2">{{ $publication->content }}</p>
                        <p class="text-sm text-gray-500 dark:text-gray-300">{{ $publication->created_at }}</p>
                    </div>
                </div>
            </div>
        </div>
    @endforeach

</x-app-layout>
