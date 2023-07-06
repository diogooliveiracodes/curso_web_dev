<section>
    <header>
        <h2 class="text-lg font-medium text-gray-900 dark:text-gray-100">
            {{ __('Update Template') }}
        </h2>

        <p class="mt-1 text-sm text-gray-600 dark:text-gray-400">
            {{ __('Update your blog template.') }}
        </p>
    </header>

    <form
        class="mt-6"
        action="{{route('template.update')}}"
        method="post">
        @csrf
        @method('put')

        <x-input-label for="template" value="{{ __('Template') }}" class="sr-only" />
        <select name="template" id="template"
            class='border-gray-300 dark:border-gray-700 dark:bg-gray-900 dark:text-gray-300 focus:border-indigo-500 dark:focus:border-indigo-600
                focus:ring-indigo-500 dark:focus:ring-indigo-600 rounded-md shadow-sm'>
            <option value="clean" @if ($user->blog->template == 'clean') selected @endif >Clean</option>
            <option value="full"
                @if ($user->blog->template == 'full')
                    selected
                @endif>
                    Full
            </option>
        </select>

        <div class="flex items-center gap-4 mt-6">
            <x-primary-button>{{ __('Save') }}</x-primary-button>

            @if (session('status') === 'password-updated')
                <p
                    x-data="{ show: true }"
                    x-show="show"
                    x-transition
                    x-init="setTimeout(() => show = false, 2000)"
                    class="text-sm text-gray-600 dark:text-gray-400"
                >{{ __('Saved.') }}</p>
            @endif
        </div>

    </form>

</section>
