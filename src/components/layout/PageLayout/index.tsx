interface IPageLayoutProps {
	children: React.ReactNode;
}

const PageLayout: React.FC<IPageLayoutProps> = ({ children }) => {
	return (
		<div>
			<div>{children}</div>
		</div>
	);
};

export { PageLayout };
