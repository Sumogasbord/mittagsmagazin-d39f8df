import * as React from 'react';

export default function Misskey({ className, ...props }) {
    return (
        <svg className={className} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" data-sb-field-path={props['data-sb-field-path']}>
            <path d="M12 1.297c-6.063 0-10.975 4.914-10.975 10.975 0 4.85 3.144 8.963 7.504 10.412 0.549 0.103 0.75-0.236 0.75-0.528 0-0.261-0.009-0.951-0.014-1.866-3.053 0.662-3.697-1.472-3.697-1.472-0.499-1.267-1.221-1.605-1.221-1.605-0.994-0.68 0.077-0.667 0.077-0.667 1.102 0.077 1.681 1.13 1.681 1.13 0.979 1.678 2.569 1.193 3.196 0.913 0.099-0.71 0.381-1.193 0.695-1.468-2.437-0.274-4.999-1.218-4.999-5.423 0-1.198 0.425-2.177 1.129-2.945-0.123-0.277-0.494-1.393 0.096-2.905 0 0 0.919-0.294 3.018 1.125 0.878-0.244 1.811-0.365 2.744-0.37 0.933 0.005 1.866 0.126 2.744 0.37 2.085-1.419 3.004-1.125 3.004-1.125 0.59 1.512 0.219 2.628 0.11 2.905 0.7 0.768 1.125 1.747 1.125 2.945 0 4.216-2.565 5.144-5.007 5.414 0.384 0.329 0.741 1.002 0.741 2.030 0 1.469-0.014 2.649-0.014 3.005 0 0.288 0.192 0.631 0.755 0.521 4.391-1.44 7.532-5.555 7.532-10.398 0-6.061-4.914-10.975-10.975-10.975z"></path>
        </svg>
    );
}
