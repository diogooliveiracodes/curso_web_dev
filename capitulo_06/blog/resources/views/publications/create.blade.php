<x-app-layout>

    <x-slot name="header">
        <h2 class="font-semibold text-xl text-gray-800 dark:text-gray-200 leading-tight">
            {{ __('Create') }}
        </h2>
    </x-slot>

    <div class="mx-6">
        {{-- Form  --}}
        <form action="{{route("publications.store")}}" method="POST">
            @csrf
            {{-- TITLE --}}
            <div>
                <x-input-label for="title" :value="__('Title')" />
                <x-text-input id="title" class="block mt-1 w-full"
                    type="text" name="title" :value="old('title')"
                    required autofocus autocomplete="title" />
                <x-input-error :messages="$errors->get('title')" class="mt-2" />
            </div>
            {{-- CONTENT --}}
            <div>
                <x-input-label for="content" :value="__('Content')" />
                <x-textarea-input id="content" class="block mt-1 w-full"
                    type="text" name="content" :value="old('content')"
                    required autofocus autocomplete="content" />
                <x-input-error :messages="$errors->get('content')" class="mt-2" />
            </div>
            {{-- BUTTONS --}}
            <div class="flex items-center justify-end mt-4">
                <x-button class="ml-4" type="submit">
                    {{ __('Create') }}
                </x-button>
            </div>
        </form>
    </div>

</x-app-layout>
