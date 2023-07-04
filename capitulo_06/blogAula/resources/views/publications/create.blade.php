<x-app-layout>

<x-slot name="header">
        <h2 class="font-semibold text-xl text-gray-800 dark:text-gray-200 leading-tight">
            {{ __('Create') }}
        </h2>
    </x-slot>

  <div class="mx-6"> 
    <form action="{{route('publications.store')}}" method="POST">
        @csrf
            <!-- Title -->
            <div>
                <x-input-label for="title" :value="__('Title')" />
                <x-text-input id="title" class="block mt-1 w-full" type="text" name="title" :value="old('title')" required autofocus autocomplete="username" />
                <x-input-error :messages="$errors->get('title')" class="mt-2" />
            </div>

            <!-- Content -->
            <div class="mt-2">
                <x-input-label for="content" :value="__('Content')" />
                <textarea id="content" class="w-full" type="text" name="content" :value="old('content')" required autofocus autocomplete="username" ></textarea>
                <x-input-error :messages="$errors->get('content')" class="mt-2" />
            </div>

            <!-- Button -->
            <div class="flex items-center justify-end mt-4">
                <x-primary-button type="submit">
                     {{ __('Create') }}
                </x-primary-button>
            </div>


    </form>
  </div> 
  
</x-app-layout>