interface IProps {
  number: string;
  email: string;
  name: string;
  website: string;
}

export default function DataSheet({ email, name, number, website }: IProps) {
  const data = [
    { heading: "Full name", value: name },
    { heading: "Number", value: number },
    { heading: "Email", value: email },
    { heading: "Website", value: website },
  ];

  return (
    <div>
      <div className="px-4 sm:px-0">
        <h3 className="text-base font-semibold leading-7 text-gray-900">
          User Data
        </h3>
      </div>
      <div className="mt-6 border-t border-gray-100">
        <dl className="divide-y divide-gray-100">
          {data.map((item) => (
            <div
              key={item.heading}
              className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0"
            >
              <dt className="text-sm font-medium leading-6 text-gray-900">
                {item.heading}
              </dt>
              <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                {item.value}
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </div>
  );
}
