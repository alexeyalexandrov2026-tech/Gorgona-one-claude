# Logo download manifest

Generated from the entities that currently exist in `lib/mockData.js`, `lib/dealsData.js` (stores, sportsbooks, and the deals/brands catalog), and `lib/eventsData.js` (leagues, teams, and ticket providers). No entities were added beyond what already exists in the project.

## Leagues, teams, and ticket providers (Tickets & Events Marketplace)

Several NBA/MLB/NHL teams' official sites are subpaths of the league domain (e.g. `nba.com/lakers`), so their resolved domain is the same as the league's — meaning those team logo slots automatically fall back to the league logo (`nba.com.png`, `mlb.com.png`, `nhl.com.png`) until a team-specific file is added under a distinct filename and wired in manually. This is the existing "one file per domain" behavior, not a bug.

| Entity | Type | Logo source URL | Suggested filename |
|---|---|---|---|
| NFL | League | https://logo.clearbit.com/nfl.com | nfl.com.png |
| NBA | League | https://logo.clearbit.com/nba.com | nba.com.png |
| MLB | League | https://logo.clearbit.com/mlb.com | mlb.com.png |
| NHL | League | https://logo.clearbit.com/nhl.com | nhl.com.png |
| MLS | League | https://logo.clearbit.com/mlssoccer.com | mlssoccer.com.png |
| ATP | League | https://logo.clearbit.com/atptour.com | atptour.com.png |
| WTA | League | https://logo.clearbit.com/wtatennis.com | wtatennis.com.png |
| UFC | League | https://logo.clearbit.com/ufc.com | ufc.com.png |
| Formula 1 | League | https://logo.clearbit.com/formula1.com | formula1.com.png |
| Kansas City Chiefs | Team (NFL) | https://logo.clearbit.com/chiefs.com | chiefs.com.png |
| Dallas Cowboys | Team (NFL) | https://logo.clearbit.com/dallascowboys.com | dallascowboys.com.png |
| San Francisco 49ers | Team (NFL) | https://logo.clearbit.com/49ers.com | 49ers.com.png |
| Miami Dolphins | Team (NFL) | https://logo.clearbit.com/miamidolphins.com | miamidolphins.com.png |
| Los Angeles Lakers | Team (NBA) | https://logo.clearbit.com/nba.com (falls back to league logo; official page is nba.com/lakers) | nba.com.png |
| Boston Celtics | Team (NBA) | https://logo.clearbit.com/nba.com (falls back to league logo) | nba.com.png |
| Miami Heat | Team (NBA) | https://logo.clearbit.com/nba.com (falls back to league logo) | nba.com.png |
| Golden State Warriors | Team (NBA) | https://logo.clearbit.com/nba.com (falls back to league logo) | nba.com.png |
| New York Yankees | Team (MLB) | https://logo.clearbit.com/mlb.com (falls back to league logo) | mlb.com.png |
| Los Angeles Dodgers | Team (MLB) | https://logo.clearbit.com/mlb.com (falls back to league logo) | mlb.com.png |
| Miami Marlins | Team (MLB) | https://logo.clearbit.com/mlb.com (falls back to league logo) | mlb.com.png |
| Florida Panthers | Team (NHL) | https://logo.clearbit.com/nhl.com (falls back to league logo) | nhl.com.png |
| Toronto Maple Leafs | Team (NHL) | https://logo.clearbit.com/nhl.com (falls back to league logo) | nhl.com.png |
| Vegas Golden Knights | Team (NHL) | https://logo.clearbit.com/nhl.com (falls back to league logo) | nhl.com.png |
| Inter Miami CF | Team (MLS) | https://logo.clearbit.com/intermiamicf.com | intermiamicf.com.png |
| LA Galaxy | Team (MLS) | https://logo.clearbit.com/lagalaxy.com | lagalaxy.com.png |
| Seattle Sounders FC | Team (MLS) | https://logo.clearbit.com/soundersfc.com | soundersfc.com.png |
| Ticketmaster | Provider | https://logo.clearbit.com/ticketmaster.com | ticketmaster.com.png |
| StubHub | Provider | https://logo.clearbit.com/stubhub.com | stubhub.com.png |
| SeatGeek | Provider | https://logo.clearbit.com/seatgeek.com | seatgeek.com.png |
| Vivid Seats | Provider | https://logo.clearbit.com/vividseats.com | vividseats.com.png |
| TickPick | Provider | https://logo.clearbit.com/tickpick.com | tickpick.com.png |
| Gametime | Provider | https://logo.clearbit.com/gametime.co | gametime.co.png |
| Eventbrite | Provider | https://logo.clearbit.com/eventbrite.com | eventbrite.com.png |
| AXS | Provider | https://logo.clearbit.com/axs.com | axs.com.png |

## Stores, sportsbooks, and deals/brands catalog

Download each source URL and save it under `public/logos/` using the suggested filename (PNG). Once a file lands at that path, `lib/logos` + `<Logo>` pick it up automatically — no code changes needed.

| Company | Logo source URL | Suggested filename |
|---|---|---|
| Adidas | https://logo.clearbit.com/adidas.com | adidas.com.png |
| Airbnb / Airbnb Experiences | https://logo.clearbit.com/airbnb.com | airbnb.com.png |
| Allmodern | https://logo.clearbit.com/allmodern.com | allmodern.com.png |
| Amazon | https://logo.clearbit.com/amazon.com | amazon.com.png |
| AMC Theatres | https://logo.clearbit.com/amctheatres.com | amctheatres.com.png |
| Apple | https://logo.clearbit.com/apple.com | apple.com.png |
| Ashley Furniture | https://logo.clearbit.com/ashleyfurniture.com | ashleyfurniture.com.png |
| ASOS | https://logo.clearbit.com/asos.com | asos.com.png |
| Bally Bet | https://logo.clearbit.com/ballybet.com | ballybet.com.png |
| Best Buy | https://logo.clearbit.com/bestbuy.com | bestbuy.com.png |
| Bet365 / bet365 Sportsbook | https://logo.clearbit.com/bet365.com | bet365.com.png |
| BetMGM / BetMGM Sportsbook | https://logo.clearbit.com/betmgm.com | betmgm.com.png |
| BetRivers Sportsbook / Betrivers | https://logo.clearbit.com/betrivers.com | betrivers.com.png |
| Blue Apron | https://logo.clearbit.com/blueapron.com | blueapron.com.png |
| Booking / Booking.com | https://logo.clearbit.com/booking.com | booking.com.png |
| Bose | https://logo.clearbit.com/bose.com | bose.com.png |
| Bumble and bumble | https://logo.clearbit.com/bumbleandbumble.com | bumbleandbumble.com.png |
| Caesars Sportsbook | https://logo.clearbit.com/caesars.com | caesars.com.png |
| CB2 | https://logo.clearbit.com/cb2.com | cb2.com.png |
| Chipotle | https://logo.clearbit.com/chipotle.com | chipotle.com.png |
| Cineworld | https://logo.clearbit.com/cineworld.com | cineworld.com.png |
| Clinique | https://logo.clearbit.com/clinique.com | clinique.com.png |
| Costco | https://logo.clearbit.com/costco.com | costco.com.png |
| Crate & Barrel | https://logo.clearbit.com/crateandbarrel.com | crateandbarrel.com.png |
| Decathlon | https://logo.clearbit.com/decathlon.com | decathlon.com.png |
| Dell | https://logo.clearbit.com/dell.com | dell.com.png |
| Delta Air Lines | https://logo.clearbit.com/delta.com | delta.com.png |
| Dick’s Sporting Goods | https://logo.clearbit.com/dickssportinggoods.com | dickssportinggoods.com.png |
| Disney+ | https://logo.clearbit.com/disneyplus.com | disneyplus.com.png |
| Domino’s | https://logo.clearbit.com/dominos.com | dominos.com.png |
| DoorDash | https://logo.clearbit.com/doordash.com | doordash.com.png |
| DraftKings / DraftKings Sportsbook | https://logo.clearbit.com/draftkings.com | draftkings.com.png |
| ESPN BET | https://logo.clearbit.com/espnbet.com | espnbet.com.png |
| Estée Lauder | https://logo.clearbit.com/esteelauder.com | esteelauder.com.png |
| Etsy | https://logo.clearbit.com/etsy.com | etsy.com.png |
| Eventbrite | https://logo.clearbit.com/eventbrite.com | eventbrite.com.png |
| Expedia | https://logo.clearbit.com/expedia.com | expedia.com.png |
| Fanatics Sportsbook | https://logo.clearbit.com/fanatics.com | fanatics.com.png |
| FanDuel / FanDuel Sportsbook | https://logo.clearbit.com/fanduel.com | fanduel.com.png |
| Fitbit | https://logo.clearbit.com/fitbit.com | fitbit.com.png |
| Gap | https://logo.clearbit.com/gap.com | gap.com.png |
| Glossier | https://logo.clearbit.com/glossier.com | glossier.com.png |
| Hard Rock Bet | https://logo.clearbit.com/hardrockbet.com | hardrockbet.com.png |
| HelloFresh | https://logo.clearbit.com/hellofresh.com | hellofresh.com.png |
| Hilton | https://logo.clearbit.com/hilton.com | hilton.com.png |
| H&M | https://logo.clearbit.com/hm.com | hm.com.png |
| Home Depot | https://logo.clearbit.com/homedepot.com | homedepot.com.png |
| HP | https://logo.clearbit.com/hp.com | hp.com.png |
| IKEA | https://logo.clearbit.com/ikea.com | ikea.com.png |
| Instacart | https://logo.clearbit.com/instacart.com | instacart.com.png |
| Kayak | https://logo.clearbit.com/kayak.com | kayak.com.png |
| Kroger | https://logo.clearbit.com/kroger.com | kroger.com.png |
| Lenovo | https://logo.clearbit.com/lenovo.com | lenovo.com.png |
| Levi’s | https://logo.clearbit.com/levi.com | levi.com.png |
| Live Nation | https://logo.clearbit.com/livenation.com | livenation.com.png |
| Logitech | https://logo.clearbit.com/logitech.com | logitech.com.png |
| L’Oréal | https://logo.clearbit.com/loreal.com | loreal.com.png |
| Lowe's / Lowe’s | https://logo.clearbit.com/lowes.com | lowes.com.png |
| Lululemon | https://logo.clearbit.com/lululemon.com | lululemon.com.png |
| MAC Cosmetics | https://logo.clearbit.com/maccosmetics.com | maccosmetics.com.png |
| Macy’s | https://logo.clearbit.com/macys.com | macys.com.png |
| Marriott | https://logo.clearbit.com/marriott.com | marriott.com.png |
| McDonald’s | https://logo.clearbit.com/mcdonalds.com | mcdonalds.com.png |
| Microsoft | https://logo.clearbit.com/microsoft.com | microsoft.com.png |
| Netflix | https://logo.clearbit.com/netflix.com | netflix.com.png |
| New Balance | https://logo.clearbit.com/newbalance.com | newbalance.com.png |
| Newegg | https://logo.clearbit.com/newegg.com | newegg.com.png |
| Nike | https://logo.clearbit.com/nike.com | nike.com.png |
| Nordstrom | https://logo.clearbit.com/nordstrom.com | nordstrom.com.png |
| NYX | https://logo.clearbit.com/nyxcosmetics.com | nyxcosmetics.com.png |
| Olive Garden | https://logo.clearbit.com/olivegarden.com | olivegarden.com.png |
| Peloton | https://logo.clearbit.com/onepeloton.com | onepeloton.com.png |
| Panera Bread | https://logo.clearbit.com/panerabread.com | panerabread.com.png |
| Pizza Hut | https://logo.clearbit.com/pizzahut.com | pizzahut.com.png |
| Pottery Barn | https://logo.clearbit.com/potterybarn.com | potterybarn.com.png |
| Puma | https://logo.clearbit.com/puma.com | puma.com.png |
| Razer | https://logo.clearbit.com/razer.com | razer.com.png |
| Reebok | https://logo.clearbit.com/reebok.com | reebok.com.png |
| Rentalcars | https://logo.clearbit.com/rentalcars.com | rentalcars.com.png |
| Safeway | https://logo.clearbit.com/safeway.com | safeway.com.png |
| Samsung | https://logo.clearbit.com/samsung.com | samsung.com.png |
| Sephora | https://logo.clearbit.com/sephora.com | sephora.com.png |
| Shake Shack | https://logo.clearbit.com/shakeshack.com | shakeshack.com.png |
| Shein | https://logo.clearbit.com/shein.com | shein.com.png |
| Shopify | https://logo.clearbit.com/shopify.com | shopify.com.png |
| Sony | https://logo.clearbit.com/sony.com | sony.com.png |
| Spotify | https://logo.clearbit.com/spotify.com | spotify.com.png |
| Starbucks | https://logo.clearbit.com/starbucks.com | starbucks.com.png |
| Epic Games | https://logo.clearbit.com/store.epicgames.com | store.epicgames.com.png |
| Steam | https://logo.clearbit.com/store.steampowered.com | store.steampowered.com.png |
| Subway | https://logo.clearbit.com/subway.com | subway.com.png |
| Taco Bell | https://logo.clearbit.com/tacobell.com | tacobell.com.png |
| Target | https://logo.clearbit.com/target.com | target.com.png |
| The Ordinary | https://logo.clearbit.com/theordinary.com | theordinary.com.png |
| Trader Joe’s | https://logo.clearbit.com/traderjoes.com | traderjoes.com.png |
| Uber Eats | https://logo.clearbit.com/ubereats.com | ubereats.com.png |
| Ulta / Ulta Beauty | https://logo.clearbit.com/ulta.com | ulta.com.png |
| Under Armour | https://logo.clearbit.com/underarmour.com | underarmour.com.png |
| Uniqlo | https://logo.clearbit.com/uniqlo.com | uniqlo.com.png |
| United Airlines | https://logo.clearbit.com/united.com | united.com.png |
| Viator | https://logo.clearbit.com/viator.com | viator.com.png |
| Walmart / Walmart Grocery | https://logo.clearbit.com/walmart.com | walmart.com.png |
| Wayfair | https://logo.clearbit.com/wayfair.com | wayfair.com.png |
| West Elm | https://logo.clearbit.com/westelm.com | westelm.com.png |
| Whole Foods | https://logo.clearbit.com/wholefoodsmarket.com | wholefoodsmarket.com.png |
| Zara | https://logo.clearbit.com/zara.com | zara.com.png |
