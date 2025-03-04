import {
  BrowserRouter,
  Routes as ReactRouterRoutes,
  Route,
  Navigate,
} from 'react-router'

import { PageGiftCardList } from '../modules/giftCard/pages/PageGiftCardList'

export const Routes = () => {
  return (
    <BrowserRouter>
      <ReactRouterRoutes>
        <Route path="/gift_cards">
          <Route index element={<PageGiftCardList />} />
        </Route>

        <Route path="*" element={<Navigate to="/gift_cards" replace />} />
      </ReactRouterRoutes>
    </BrowserRouter>
  )
}
