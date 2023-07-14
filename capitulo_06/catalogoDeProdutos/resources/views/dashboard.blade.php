<x-app-layout>
    <x-slot name="header">
        <h2 class="font-semibold text-xl text-gray-800 leading-tight">
            {{ __('Dashboard') }}
        </h2>
    </x-slot>

    @if(auth()->user()->company_id)



    <div class="py-12">
        <div class="max-w-7xl mx-auto sm:px-6 lg:px-8">
            <div class="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                <div class="p-6 text-gray-900">
                    {{auth()->user()->company->name}}
                </div>
            </div>
        </div>
    </div>

    @else
    <div class="py-12">
        <div class="max-w-7xl mx-auto sm:px-6 lg:px-8">
            <div class="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                <div class="m-6">
                    <form action="{{route('companies.store')}}" method="post">
                        @csrf
                        <x-input-label for="name" :value="__('Company Name')" />
                        <x-text-input id="name" name="name" type="text" required class="block mt-1 w-full mx-auto"/>
                        <x-input-error :messages="$errors->get('company')" class="mt-2"/>
                         <div class="mt-4 flex justify-end my-4 mx-auto">
                            <x-primary-button>Confirm</x-primary-button>
                         </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
    @endif
</x-app-layout>
