<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Mountain;

class MountainController extends Controller
{
    public function index()
    {
        return response()->json(Mountain::all());
    }

    public function show($id)
    {
        $mountain = Mountain::find($id);
        if (!$mountain) {
            return response()->json(['message' => 'Mountain not found'], 404);
        }
        return response()->json($mountain);
    }

    public function store(Request $request)
    {
        $request->validate([
            'name' => 'required|string',
            'location' => 'required|string',
            'height' => 'required|integer',
        ]);

        $mountain = Mountain::create($request->all());
        return response()->json($mountain, 201);
    }

    public function update(Request $request, $id)
    {
        $mountain = Mountain::find($id);
        if (!$mountain) {
            return response()->json(['message' => 'Mountain not found'], 404);
        }

        $mountain->update($request->all());
        return response()->json($mountain);
    }

    public function destroy($id)
    {
        $mountain = Mountain::find($id);
        if (!$mountain) {
            return response()->json(['message' => 'Mountain not found'], 404);
        }

        $mountain->delete();
        return response()->json(['message' => 'Mountain deleted']);
    }
}
