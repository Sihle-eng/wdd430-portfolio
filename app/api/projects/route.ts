import { NextRequest, NextResponse } from 'next/server';
import { getAllProjects, getProjectsByType } from '@/lib/projects-db';

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const type = searchParams.get('type');

  try {
    let projects;
    if (type === 'opensource' || type === 'school') {
      projects = getProjectsByType(type);
    } else {
      projects = getAllProjects();
    }
    return NextResponse.json(projects);
  } catch (error) {
    return NextResponse.json(
      { error: 'Failed to fetch projects' },
      { status: 500 }
    );
  }
}