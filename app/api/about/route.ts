import { prisma } from '@/lib/prisma';
import { NextResponse } from 'next/server';

export async function GET() {
  try {
    const about = await prisma.about.findFirst();
    
    if (!about) {
      // Return default about data
      return NextResponse.json({
        title: 'About JANGID INTERIOR\'S',
        subtitle: 'Crafting Luxury Since 2015',
        story: 'With over a decade of expertise, JANGID INTERIOR\'S has redefined luxury interior design in India. We believe every space tells a story, and we\'re here to author yours.',
        mission: 'To transform ordinary spaces into extraordinary sanctuaries that reflect elegance, functionality, and the unique vision of our clients.',
        vision: 'To become India\'s most trusted name in bespoke interior design, known for innovation, craftsmanship, and timeless elegance.',
        image: 'https://images.unsplash.com/photo-1565183938294-7563f3ce68c1?w=800&q=80',
      });
    }

    return NextResponse.json(about);
  } catch (error) {
    console.error('Error fetching about:', error);
    return NextResponse.json(
      { message: 'Internal server error' },
      { status: 500 }
    );
  }
}
