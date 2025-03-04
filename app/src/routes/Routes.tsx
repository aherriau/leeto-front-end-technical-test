import {
  BrowserRouter,
  Routes as ReactRouterRoutes,
  Route,
  Navigate,
} from 'react-router'

import { PageGiftCardList } from '../modules/giftCard/pages/PageGiftCardList'
import { PageGiftCardDetails } from '../modules/giftCard/pages/PageGiftCardDetails'

export const Routes = () => {
  return (
    <BrowserRouter>
      <ReactRouterRoutes>
        <Route path="/gift_cards">
          <Route index element={<PageGiftCardList />} />
          <Route path=":id" element={<PageGiftCardDetails />} />
        </Route>

        <Route path="*" element={<Navigate to="/gift_cards" replace />} />
      </ReactRouterRoutes>
    </BrowserRouter>
  )
}
