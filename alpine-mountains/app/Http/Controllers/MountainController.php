<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Mountain;

class MountainController extends Controller
{
    // Alle bergen ophalen
    public function index()
    {
        return response()->json(Mountain::all());
    }

    // Detail van één berg
    public function show($id)
    {
        $mountain = Mountain::find($id);
        if (!$mountain) {
            return response()->json(['message'=>'Mountain not found'], 404);
        }
        return response()->json($mountain);
    }

    // Nieuwe berg aanmaken
    public function store(Request $request)
    {
        $request->validate([
            'name'=>'required|string',
            'location'=>'required|string',
            'height'=>'required|integer',
        ]);

        $mountain = Mountain::create($request->all());
        return response()->json($mountain, 201);
    }

    // Berg bewerken
    public function update(Request $request, $id)
    {
        $mountain = Mountain::find($id);
        if (!$mountain) {
            return response()->json(['message'=>'Mountain not found'], 404);
        }

        $request->validate([
            'name'=>'sometimes|required|string',
            'location'=>'sometimes|required|string',
            'height'=>'sometimes|required|integer',
        ]);

        $mountain->update($request->all());
        return response()->json($mountain);
    }

    // Berg verwijderen
    public function destroy($id)
    {
        $mountain = Mountain::find($id);
        if (!$mountain) {
            return response()->json(['message'=>'Mountain not found'], 404);
        }

        $mountain->delete();
        return response()->json(['message'=>'Mountain deleted']);
    }
}
