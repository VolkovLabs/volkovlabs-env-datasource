import { test, expect } from '@grafana/plugin-e2e';

test.describe('ENV datasource', () => {
  test('Should display a Table with Environment Variables', async ({ gotoDashboardPage, dashboardPage, page }) => {
    /**
     * Go To panels dashboard panels.json
     * return dashboardPage
     */
    await gotoDashboardPage({ uid: 'BiIFntf7k' });

    /**
     * Await content load
     */
    await page.waitForTimeout(1000);

    /**
     * Find panel by title with data
     * Should be visible
     */
    await expect(dashboardPage.getPanelByTitle('Environment Variables').locator).toBeVisible();
  });
});
