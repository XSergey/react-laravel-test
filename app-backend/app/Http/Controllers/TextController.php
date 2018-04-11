<?php
namespace App\Http\Controllers;
use App\Text;
use Illuminate\Http\Request;
use App\Http\Requests;
class PostController extends Controller
{
    public function index()
    {
        $texts = Text::all();
        return response()->json($texts, 200);
    }

    public function store(Request $request)
    {
        $text = Text::create([
            'text' => $request->input("text"),
        ]);

        return response()->json($text, 200);
    }
}