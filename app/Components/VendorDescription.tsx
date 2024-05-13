function VendorDescription(props: { description: string }) {
    return (
        <div
            className="relative flex min-h-[240px] w-1/2 flex-col rounded-xl border border-gray-200 bg-gray-100 bg-clip-border font-Figtree text-gray-700 shadow-lg"
            aria-labelledby="vendor-description-title"
        >
            <div className="p-6">
                <h5
                    id="vendor-description-title"
                    className="mb-2 block text-xl font-bold leading-snug tracking-wider text-slate-900 antialiased"
                >
                    DESCRIPTION
                </h5>
                <p className="font-sans block text-base font-light leading-relaxed text-inherit antialiased">
                    {props.description}
                </p>
            </div>
        </div>
    );
}

export default VendorDescription;
