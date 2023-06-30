<x-app-layout>

<x-slot name="header">
        <h2 class="font-semibold text-xl text-gray-800 dark:text-gray-200 leading-tight">
            {{ __('Edit') }}
        </h2>
    </x-slot>

  <div class="mx-6"> 
    <form action="{{route('publications.update', $publication)}}" method="POST">
        @csrf
        @method("PUT")

            <!-- Title -->
            <div>
                <x-input-label for="title" :value="__('Title')" />
                <x-text-input id="title" class="block mt-1 w-full" type="text" name="title" :value='$publication->title' required autofocus autocomplete="username" />
                <x-input-error :messages="$errors->get('title')" class="mt-2" />
            </div>

            <!-- Content -->
            <div>
                <x-input-label for="content" :value="__('Content')" />
                    <textarea name="content" id="content" cols="225" rows="10">
                        {{$publication->content}}
                    </textarea>
                <x-input-error :messages="$errors->get('content')" class="mt-2" />
            </div>

            <!-- Button -->
            <div class="flex items-center justify-end mt-4">
                <x-primary-button>
                     {{ __('Update') }}
                </x-primary-button>
            </div>


    </form>
  </div> 
  
</x-app-layout>