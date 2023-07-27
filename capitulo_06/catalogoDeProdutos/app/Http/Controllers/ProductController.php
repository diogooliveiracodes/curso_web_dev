<?php

namespace App\Http\Controllers;

use App\Models\Product;
use App\Http\Requests\StoreProductRequest;
use App\Http\Requests\UpdateProductRequest;
use App\Models\ProductPhoto;
use Illuminate\Support\Facades\Storage;
use Ramsey\Uuid\Uuid;

class ProductController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        return view('products.index', [
            'products' => Product::where('company_id', auth()->user()->company_id)
                ->orderByDesc('created_at')
                ->paginate(20)
        ]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        return view('products.create', [
            'categories'=> \App\Models\Category::where('company_id', auth()->user()->company_id)->get()
        ]);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(StoreProductRequest $request)
    {
        $data = $request->validated();
        $data['company_id'] = auth()->user()->company_id;

        $product = Product::create ($data);

        if($request->hasFile('image')) {
            foreach($request->file('image') as $image) {
                $name = Uuid::uuid4().'.'.$image->extension();
                $image->storeAs('public/'.$product->company_id.'/products/'.$product->id.'/'.$name);
            ProductPhoto::create([
                'company_id' =>$product->company_id,
                'product_id' => $product->id,
                'name' => $name,
                'path' => $product->company_id.'/products/'.$product->id.'/'.$name
            ]);
            }
        }

        return redirect()->route('products.index')->with('success', 'Product created successfully.');
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        return view('products.show', [
            'product' => Product::findOrFail($id)
        ]);
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(string $id)
    {
        return view('products.edit', [
            'product' => Product::findOrFail($id),
            'categories' => \App\Models\Category::where('company_id', auth()->user()->company_id)->get()
        ]);

    }

    /**
     * Update the specified resource in storage.
     */
    public function update(UpdateProductRequest $request, Product $product)
    {  $product->update ($request->validated());

        if($request->hasFile('image'))
        {
            foreach($request->file('image') as $image)
            {
                $name = Uuid::uuid4().'.'.$image->extension();
                $image->storeAs('public/'.$product->company_id.'/products/'.$product->id.'/'.$name);
            ProductPhoto::create([
                'company_id' =>$product->company_id,
                'product_id' => $product->id,
                'name' => $name,
                'path' => $product->company_id.'/products/'.$product->id.'/'.$name
            ]);
            }
        }

        return redirect()->route('products.index')->with('success', 'Product updated successfully.');
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        Product::findOrFail($id)->delete();

        return redirect()->route('products.index')->with('success', 'Product deleted successfully.');
    }

    public function destroyPhoto(int $id)
    {
        $photo = ProductPhoto::findOrFail($id);
        $product = Product::findOrFail($photo->product_id);
        Storage::delete('public/'.$photo->path);
        $photo->delete();

        return redirect()
            ->route('products.edit', $product->id)
            ->with('success', 'Photo deleted successfully.');
    }
}
