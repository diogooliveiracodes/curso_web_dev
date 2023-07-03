<?php

namespace App\Http\Controllers;

use App\Models\Publication;
use Illuminate\Http\Request;
use Illuminate\Support\Str;

class PublicationController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $publications = Publication::where('blog_id', auth()->user()->blog->id)
            ->orderBy('created_at', 'desc')
            ->paginate(10);

        return view('publications.index', compact('publications'));
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        return view('publications.create');
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $request->validate([
            'title' => ['required', 'string', 'min:5', 'max:255'],
            'content' => ['required', 'string', 'min:5'],
        ]);

        $validation = Publication::where('title', $request->title)
            ->where('blog_id', auth()->user()->blog_id)
            ->first();

        if ($validation) {
            return redirect()->back()->with('title', 'This title is already in use.');
        }

        Publication::create([
            'blog_id' => auth()->user()->blog->id,
            'user_id' => auth()->user()->id,
            'title' => $request->title,
            'slug' => Str::slug($request->title),
            'content' => $request->content,
        ]);

        return redirect()->route('publications.index')
            ->with('success', 'Publication created successfully.');
    }

    /**
     * Display the specified resource.
     */
    public function show(Publication $publication)
    {
        return view('publications.show', compact('publication'));
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Publication $publication)
    {
        return view('publications.edit', compact('publication'));
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Publication $publication)
    {
        $request->validate([
            'title' => ['required', 'string', 'min:5', 'max:255'],
            'content' => ['required', 'string', 'min:5'],
        ]);

        $validation = Publication::where('title', $request->title)
        ->where('blog_id', auth()->user()->blog_id)
        ->first();

        if ($validation && $validation->id != $publication->id) {
            return redirect()->back()->with('title', 'This title is already in use.');
        }

        $publication->update([
            'title' => $request->title,
            'slug' => Str::slug($request->title),
            'content' => $request->content,
            'user_id' => auth()->user()->id
        ]);

        return redirect()->route('publications.index')
            ->with('success', 'Publication updated successfully.');
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Publication $publication)
    {
        $publication->delete();

        return redirect()->route('publications.index')
            ->with('success', 'Publication deleted successfully.');
    }
}
