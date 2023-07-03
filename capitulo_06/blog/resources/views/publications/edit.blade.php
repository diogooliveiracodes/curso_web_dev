<x-app-layout>

    <x-slot name="header">
        <h2 class="font-semibold text-xl text-gray-800 dark:text-gray-200 leading-tight">
            {{ __('Edit') }}
        </h2>
    </x-slot>

    <div class="mx-6 py-2">
        {{-- Form  --}}
        <form action="{{route("publications.update", $publication)}}" method="POST">
            @csrf
            @method('PUT')
            {{-- TITLE --}}
            <div>
                <x-input-label for="title" :value="__('Title')" />
                <x-text-input id="title" class="block mt-1 w-full"
                    type="text" name="title" :value="$publication->title"
                    required autofocus autocomplete="title" />
                <x-input-error :messages="$errors->get('title')" class="mt-2" />
            </div>
            {{-- CONTENT --}}
            <div class="mt-2">
                <x-input-label for="content" :value="__('Content')" />
                <textarea
                    class="w-full border-gray-300 dark:border-gray-700
                    dark:bg-gray-900 dark:text-gray-300 focus:border-indigo-500
                    dark:focus:border-indigo-600 focus:ring-indigo-500 dark:focus:ring-indigo-600
                    rounded-md shadow-sm'"
                    id="content"
                    rows="10"
                    type="text" name="content" required autofocus autocomplete="content"
                    >{{ $publication->content }}</textarea>
                <x-input-error :messages="$errors->get('content')" class="mt-2" />
            </div>
            {{-- BUTTONS --}}
            <div class="flex items-center justify-end mt-4">
                <x-button class="ml-4">
                    {{ __('Update') }}
                </x-button>
            </div>
        </form>
    </div>

</x-app-layout>
