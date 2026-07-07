import { NextRequest, NextResponse } from 'next/server';
import { getProjectById } from '@/lib/projects-db';

export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }  // ← type as Promise
) {
  try {
    const { id } = await params;  // ← await the Promise
    const idNum = Number(id);

    if (Number.isNaN(idNum) || !Number.isInteger(idNum)) {
      return NextResponse.json({ error: 'Invalid id' }, { status: 400 });
    }

    const project = getProjectById(idNum);
    if (!project) {
      return NextResponse.json({ error: 'Project not found' }, { status: 404 });
    }

    return NextResponse.json(project);
  } catch (error) {
    return NextResponse.json(
      { error: 'Failed to fetch project' },
      { status: 500 }
    );
  }
}