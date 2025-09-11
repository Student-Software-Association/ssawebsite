import { redirect } from 'next/navigation';

export default function CatchAllRoutes() {
  redirect('/');
}