'use client';
import Link from 'next/link';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import { useCallback, useEffect } from 'react';

const NavigationTestPage = () => {
    const router = useRouter();
    const pathname = usePathname();
    const searchParams = useSearchParams();
    const q = searchParams.get('q');

    console.log('pathname', pathname, q);
    useEffect(() => {
        router.push(pathname + '?' + createQueryString('hernya', 'next'));
    }, []);

    const createQueryString = useCallback(
        (name, value) => {
            const params = new URLSearchParams(searchParams.toString());
            params.set(name, value);

            return params.toString();
        },
        [searchParams]
    );

    const handleClick = () => {
        console.log('clicked');

        // router.push('/');
    };

    return (
        <div>
            <Link href={'/'}>Click here</Link>
            <button onClick={handleClick}>write and redirect</button>
        </div>
    );
};

export default NavigationTestPage;
