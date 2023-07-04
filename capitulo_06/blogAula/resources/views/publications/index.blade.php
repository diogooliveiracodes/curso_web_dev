<x-app-layout>

<x-slot name="header">
    <div class="flex items-center justify-between mt-4">
        <h2 class="font-semibold text-xl text-gray-800 dark:text-gray-200 leading-tight">
            {{ __('Publications') }}
        </h2>
          <!-- Button -->
          
        <x-primary-button class="mt-4">
            <a href="{{route('publications.create')}}">
                {{ __('New Publication') }}
            </a>
                     
        </x-primary-button>
    </div>
    </x-slot>

    @foreach($publications as $publication)
        <div class="py-4">
            <div class="max-w-7x1 mx-auto sm:px-6 lg:px-8">
                <div class="bg-white dark:bg-gray-800 overflow-hidden shadow-sm sm:rounded-lg">
                    <div class="p-6 text-gray-900 dark:text-gray-100">
                        <div class="flex items-center justify-between mt-4">
                          <a href="{{route('publications.edit', $publication)}}">
                                <i class="fa fa-edit fa-2x"></i> Edit                               
                          </a>
                          <form action="{{route('publications.destroy', $publication)}}" method="POST" onsubmit="return confirm('Tem certeza que deseja excluir esta publicação?')">
                                @csrf
                                @method('DELETE')
                                <x-primary-button type="submit">
                                    <i class="fa fa-trash fa-2x"></i> Delete
                                </x-primary-button>
                          </form>
                          </div>                            
                          <a href="{{route('publications.show', $publication)}}">
                                <h1 class="text-3x1 font-bold">{{$publication->title}}</h1>
                          </a>                         
                        <p class="text-lg text-gray-600 dark:text-gray-400 mb-2">{{$publication->content}}</p>
                        <p class="text-sm text-gray-500 dark:text-gray-300">{{$publication->created_at}}</p>
                    </div>
                </div>
              
            </div>
        </div>
    @endforeach


</x-app-layout>