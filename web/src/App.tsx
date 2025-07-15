import {Suspense} from 'react'
import {ErrorBoundary} from 'react-error-boundary'
import {Route, Routes} from 'react-router'


export function App() {
	return (
		<ErrorBoundary fallbackRender={() => <div>Error</div>}>
			<Suspense fallback={<div>Loading...</div>}>
				<Routes>
					<Route element={<div>Home</div>} index={true} />
				</Routes>
			</Suspense>
		</ErrorBoundary>
	)
}