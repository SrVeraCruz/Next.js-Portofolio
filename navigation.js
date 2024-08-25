import {createSharedPathnamesNavigation} from 'next-intl/navigation';

export const locales = ['en', 'fr','pt'];
 
export const {Link, redirect, usePathname, useRouter} =
  createSharedPathnamesNavigation({locales});